# Espejo Bíblico

Aplicación web sencilla para una dinámica cristiana con jóvenes dentro de la iglesia.

La dinámica compara de forma respetuosa:

- El personaje bíblico al que una persona desea parecerse.
- El personaje bíblico al que otra persona cree que actualmente se parece.

El resultado muestra un porcentaje simbólico, características, similitudes, contraste, reflexión, versículos y un reto semanal.

## Objetivo

Usar la tecnología como apoyo para una conversación espiritual ordenada, sin burlas ni señalamientos.

## Archivos principales

```txt
index.html
style.css
script.js
.nojekyll
DEPLOY_GITHUB.md
api-ready/
```

## Uso local

Abre `index.html` en tu navegador.

## Publicación remota

Revisa `DEPLOY_GITHUB.md` para publicarlo en GitHub Pages.

Si el repositorio se llama `espejo-biblico` y el usuario es `Alejandro-ZG`, el enlace esperado será:

```txt
https://alejandro-zg.github.io/espejo-biblico/
```

## Nota sobre API

La versión principal funciona sin API para poder publicarse en GitHub Pages sin exponer claves privadas.

Si quieres conectarla a OpenAI, usa la carpeta `api-ready` como base para un backend. No pongas tu API key dentro del HTML o JavaScript público.
