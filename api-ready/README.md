# Backend opcional con OpenAI

Esta carpeta es opcional. La app principal funciona sin backend.

Usa este backend solamente si quieres que la comparación sea generada por OpenAI.

## Instalación

```bash
npm install
cp .env.example .env
npm run dev
```

## Variables

```txt
OPENAI_API_KEY=tu_key
OPENAI_MODEL=gpt-4.1-mini
ALLOWED_ORIGIN=https://TU-USUARIO.github.io
PORT=3000
```

No publiques tu archivo `.env`.
