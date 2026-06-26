# Publicar en GitHub Pages

Usuario detectado: `Alejandro-ZG`

## Opción por interfaz web

1. Crea un repositorio público llamado `espejo-biblico`.
2. Sube estos archivos al repositorio, dejando `index.html` en la raíz.
3. Entra a `Settings > Pages`.
4. En `Build and deployment`, elige `Deploy from a branch`.
5. Selecciona `main` y `/root`.
6. Guarda.

El enlace esperado será:

```txt
https://alejandro-zg.github.io/espejo-biblico/
```

## Opción con GitHub CLI

Desde la carpeta `espejo-biblico`:

```bash
git init
git add .
git commit -m "Agregar Espejo Bíblico"
gh repo create espejo-biblico --public --source=. --remote=origin --push
```

Luego activa GitHub Pages desde `Settings > Pages`.
