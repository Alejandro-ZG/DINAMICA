# Backend Espejo Bíblico con Gemini

Backend Node.js + Express para conectar GitHub Pages con Gemini API usando Render.

## Variables de entorno en Render

```env
GEMINI_API_KEY=tu_api_key_de_gemini
GEMINI_MODEL=gemini-3.5-flash
ALLOWED_ORIGINS=https://alejandro-zg.github.io
MAX_REQUESTS_PER_WINDOW=30
```

## Render

- Root Directory: `backend`
- Build Command: `npm install`
- Start Command: `npm start`

## Endpoints

- `GET /` prueba de servicio
- `GET /health` healthcheck
- `POST /api/comparar` comparación bíblica
