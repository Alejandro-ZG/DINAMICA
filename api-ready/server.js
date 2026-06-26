import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import OpenAI from 'openai';

const app = express();
const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

app.use(cors({ origin: process.env.ALLOWED_ORIGIN || '*' }));
app.use(express.json());

app.post('/api/comparar', async (req, res) => {
  try {
    const { personajeDeseado, personajePercibido } = req.body || {};

    if (!personajeDeseado || !personajePercibido) {
      return res.status(400).json({ error: 'Debes enviar ambos personajes.' });
    }

    const prompt = `
Actúa como un guía cristiano para jóvenes dentro de una iglesia.

Compara dos personajes bíblicos:
1. Personaje al que el joven desea parecerse: ${personajeDeseado}
2. Personaje al que otro participante dice que realmente se parece: ${personajePercibido}

Devuelve una respuesta respetuosa, edificante y no ofensiva.
Incluye porcentaje simbólico, características de ambos personajes, similitudes, diferencias, reflexión cristiana breve, consejo práctico y versículo relacionado.
No uses tono de burla. No hagas acusaciones personales. No presentes el porcentaje como verdad absoluta.
    `.trim();

    const response = await client.responses.create({
      model: process.env.OPENAI_MODEL || 'gpt-4.1-mini',
      input: prompt
    });

    res.json({ result: response.output_text });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'No se pudo generar la comparación.' });
  }
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Servidor activo en puerto ${port}`));
