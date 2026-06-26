# Espejo Bíblico - Gemini Ready

App web estática para GitHub Pages con backend en Render usando Gemini API.

## Frontend

GitHub Pages usa:

- `index.html`
- `style.css`
- `script.js`
- `config.js`

En `config.js` debe estar tu endpoint de Render:

```js
window.ESPEJO_API_URL = 'https://dinamica-e7eh.onrender.com/api/comparar';
```

## Backend

Render debe apuntar a la carpeta `backend` y usar las variables:

```env
GEMINI_API_KEY=tu_api_key_de_gemini
GEMINI_MODEL=gemini-3.5-flash
ALLOWED_ORIGINS=https://alejandro-zg.github.io
MAX_REQUESTS_PER_WINDOW=30
```
