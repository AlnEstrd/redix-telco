# Redix Telecomunicaciones — sitio web

Sitio estático (HTML sin JavaScript) para https://redixtelecomunicaciones.lat, preparado
para la verificación de negocio de Meta (WhatsApp Business Platform).

Todo el contenido está en el HTML servido: el rastreador de Meta no necesita ejecutar JavaScript.

## Estructura

| Archivo | Qué contiene |
| --- | --- |
| `site.config.mjs` | **Datos del negocio** (razón social, RFC, domicilio, teléfono, correo, horario, cobertura). Única fuente de verdad. |
| `src/pages.mjs` | Texto de cada página: `/`, `/contacto`, `/privacidad`, `/terminos`, `/eliminacion-de-datos`. |
| `src/layout.mjs` | `<head>` (título, descripción, Open Graph, favicon, marcador de Meta) y pie de página común. |
| `src/styles.css` | Estilos (mobile-first). |
| `public/` | Favicon, imagen Open Graph y `serve.json`. |
| `build.mjs` | Genera `_static/` con las páginas, `robots.txt` y `sitemap.xml`. |
| `scripts/verify.mjs` | Revisa el sitio (local o en producción) como lo haría un rastreador sin JavaScript. |

## Antes de publicar

1. Abre `site.config.mjs` y reemplaza **todos** los valores entre `[corchetes]` con los datos
   exactos de tu Constancia de Situación Fiscal (mismas mayúsculas, abreviaturas y orden).
2. Pega la etiqueta de Meta en `src/layout.mjs`, en la línea `<!-- META_DOMAIN_VERIFICATION -->`:
   ```html
   <meta name="facebook-domain-verification" content="TU_CODIGO">
   ```
3. Si cambias el contenido de los avisos legales, actualiza `lastUpdated` en `site.config.mjs`.

## Desarrollo local

```bash
npm install
npm run build            # genera _static/
PORT=8080 npm start      # sirve en http://localhost:8080
npm run verify:local     # revisa todas las páginas
```

## Despliegue en DigitalOcean App Platform

La app actual es un servicio Node. No hace falta cambiar nada en el panel si ya usa:

- **Build command:** `npm run build`
- **Run command:** `npm start`
- **HTTP port:** `8080` (o el que tenga configurado; `npm start` usa `$PORT`)

Pasos:

1. Haz merge de esta rama a `main` (con *Autodeploy* activo, DigitalOcean redepliega solo).
   Si no, en el panel: **Apps → tu app → Deploy**.
2. En **Settings → Domains** confirma que `redixtelecomunicaciones.lat` está como dominio
   principal con certificado activo. Si agregas `www`, que redirija al mismo dominio.
3. Cuando termine el despliegue, verifica producción:
   ```bash
   npm run verify
   curl -s https://redixtelecomunicaciones.lat | grep -E "Redix|RFC|contacto@"
   ```

**Alternativa recomendada (gratis, con CDN):** crear un componente *Static Site* en la misma app
con build command `npm run build` y output directory `_static`, mover el dominio a ese
componente y eliminar el servicio Node. En ese caso define `404.html` como *Error document*.
