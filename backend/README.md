# Backend Espejo Bíblico

Backend Node.js + Express para conectar la app de GitHub Pages con OpenAI sin exponer la API key.

## Render

Configuración recomendada:

- Root Directory: `backend`
- Build Command: `npm install`
- Start Command: `npm start`

Variables de entorno:

```env
OPENAI_API_KEY=tu_api_key_real
OPENAI_MODEL=gpt-4.1-mini
ALLOWED_ORIGINS=https://alejandro-zg.github.io,http://localhost:5500,http://127.0.0.1:5500
MAX_REQUESTS_PER_WINDOW=30
```

Endpoint principal:

```txt
POST /api/comparar
```

Body:

```json
{
  "personajeDeseado": "David",
  "personajePercibido": "Jacob"
}
```
