import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import { GoogleGenAI } from '@google/genai';

const app = express();
const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

const allowedOrigins = (process.env.ALLOWED_ORIGINS || '')
  .split(',')
  .map(origin => origin.trim())
  .filter(Boolean);

const sensitiveCharacters = new Set([
  'judas', 'judas iscariote', 'cain', 'caín', 'jezabel', 'faraon', 'faraón', 'herodes', 'goliat'
]);

const requestsByIp = new Map();
const WINDOW_MS = 60 * 1000;
const MAX_REQUESTS = Number(process.env.MAX_REQUESTS_PER_WINDOW || 30);

app.use(cors({
  origin(origin, callback) {
    if (!origin) return callback(null, true);
    if (allowedOrigins.length === 0 || allowedOrigins.includes(origin)) {
      return callback(null, true);
    }
    return callback(new Error('Origen no permitido por CORS'));
  }
}));

app.use(express.json({ limit: '20kb' }));

function normalizeName(value = '') {
  return String(value)
    .trim()
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/\s+/g, ' ');
}

function rateLimit(req, res, next) {
  const ip = req.headers['x-forwarded-for']?.split(',')[0]?.trim() || req.socket.remoteAddress || 'unknown';
  const now = Date.now();
  const record = requestsByIp.get(ip) || { count: 0, resetAt: now + WINDOW_MS };

  if (now > record.resetAt) {
    record.count = 0;
    record.resetAt = now + WINDOW_MS;
  }

  record.count += 1;
  requestsByIp.set(ip, record);

  if (record.count > MAX_REQUESTS) {
    return res.status(429).json({ error: 'Demasiadas solicitudes. Intenta de nuevo en un momento.' });
  }

  next();
}

const comparacionSchema = {
  type: 'object',
  additionalProperties: false,
  properties: {
    porcentaje: {
      type: 'number',
      description: 'Porcentaje simbólico de acercamiento entre 0 y 100.'
    },
    personajeDeseado: { type: 'string' },
    personajePercibido: { type: 'string' },
    resumenDeseado: { type: 'string' },
    resumenPercibido: { type: 'string' },
    caracteristicasDeseado: {
      type: 'array',
      items: { type: 'string' }
    },
    caracteristicasPercibido: {
      type: 'array',
      items: { type: 'string' }
    },
    similitudes: {
      type: 'array',
      items: { type: 'string' }
    },
    contraste: { type: 'string' },
    reflexion: { type: 'string' },
    versiculo: { type: 'string' },
    reto: { type: 'string' }
  },
  required: [
    'porcentaje',
    'personajeDeseado',
    'personajePercibido',
    'resumenDeseado',
    'resumenPercibido',
    'caracteristicasDeseado',
    'caracteristicasPercibido',
    'similitudes',
    'contraste',
    'reflexion',
    'versiculo',
    'reto'
  ]
};

app.get('/', (req, res) => {
  res.json({ ok: true, service: 'Espejo Bíblico API con Gemini' });
});

app.get('/health', (req, res) => {
  res.json({ ok: true });
});

app.post('/api/comparar', rateLimit, async (req, res) => {
  try {
    if (!process.env.GEMINI_API_KEY) {
      return res.status(500).json({ error: 'Falta configurar GEMINI_API_KEY en Render.' });
    }

    const personajeDeseado = String(req.body?.personajeDeseado || '').trim();
    const personajePercibido = String(req.body?.personajePercibido || '').trim();

    if (!personajeDeseado || !personajePercibido) {
      return res.status(400).json({ error: 'Debes enviar ambos personajes.' });
    }

    if (personajeDeseado.length > 40 || personajePercibido.length > 40) {
      return res.status(400).json({ error: 'Usa nombres de personajes más cortos.' });
    }

    if (sensitiveCharacters.has(normalizeName(personajePercibido))) {
      return res.status(400).json({
        error: 'Para cuidar el ambiente, evita usar personajes bíblicos asociados con burla, traición o violencia como comparación directa.'
      });
    }

    const prompt = `
Actúa como un guía cristiano para jóvenes dentro de una iglesia.

Compara estos dos personajes bíblicos:
- Personaje al que el joven desea parecerse: ${personajeDeseado}
- Personaje al que otro participante dice que se parece: ${personajePercibido}

La respuesta debe ser respetuosa, edificante, clara para jóvenes y útil para una dinámica dentro de la iglesia.
No uses tono de burla. No ataques a la persona. No presentes el porcentaje como verdad absoluta.
El porcentaje debe ser simbólico y servir solo como punto de reflexión.
Devuelve una comparación equilibrada: fortalezas, proceso, contraste, versículo y reto práctico.
    `.trim();

    const interaction = await ai.interactions.create({
      model: process.env.GEMINI_MODEL || 'gemini-3.5-flash',
      input: prompt,
      response_format: {
        type: 'text',
        mime_type: 'application/json',
        schema: comparacionSchema
      }
    });

    const data = JSON.parse(interaction.output_text);
    res.json(data);
  } catch (error) {
    console.error('Error en /api/comparar:', error);
    res.status(500).json({
      error: 'No se pudo generar la comparación bíblica con Gemini.',
      detail: process.env.NODE_ENV === 'production' ? undefined : String(error?.message || error)
    });
  }
});

const port = process.env.PORT || 3000;
app.listen(port, '0.0.0.0', () => {
  console.log(`Espejo Bíblico API con Gemini activo en puerto ${port}`);
});
