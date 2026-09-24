import { site, business as b } from "../site.config.mjs";

export const esc = (s) =>
  String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

const nav = [
  { href: "/", label: "Inicio" },
  { href: "/contacto", label: "Contacto" },
];

const legalLinks = [
  { href: "/privacidad", label: "Aviso de Privacidad" },
  { href: "/terminos", label: "Términos y Condiciones" },
  { href: "/eliminacion-de-datos", label: "Eliminación de datos" },
  { href: "/contacto", label: "Contacto" },
];

export function waButton(label = "Escríbenos por WhatsApp", extraClass = "") {
  return `<a class="btn btn-wa ${extraClass}" href="${b.whatsappUrl}" rel="noopener" target="_blank">${esc(label)}</a>`;
}

function footer() {
  return `<footer class="site-footer">
  <div class="wrap footer-grid">
    <div>
      <p class="footer-brand">${esc(b.tradeName)}</p>
      <address>
        <p><strong>Nombre o razón social:</strong> ${esc(b.legalName)}</p>
        <p><strong>RFC:</strong> ${esc(b.rfc)}</p>
        <p><strong>Domicilio:</strong> ${esc(b.address)}</p>
        <p><strong>Teléfono / WhatsApp:</strong> <a href="tel:${b.phoneE164}">${esc(b.phoneDisplay)}</a></p>
        <p><strong>Correo:</strong> <a href="mailto:${b.email}">${esc(b.email)}</a></p>
        <p><strong>Horario:</strong> ${esc(b.hours)}</p>
      </address>
    </div>
    <nav aria-label="Legal">
      <ul class="footer-links">
        ${legalLinks.map((l) => `<li><a href="${l.href}">${esc(l.label)}</a></li>`).join("\n        ")}
      </ul>
    </nav>
  </div>
  <div class="wrap footer-note">
    <p>${esc(b.tradeName)} es un intermediario independiente. El servicio de internet lo prestan proveedores externos; no somos un proveedor de telecomunicaciones ni estamos afiliados oficialmente a ninguno.</p>
    <p>© ${new Date().getFullYear()} ${esc(b.legalName)}</p>
  </div>
</footer>`;
}

export function layout({ path, title, description, body, noindex = false }) {
  const url = site.url + (path === "/" ? "/" : path);
  const fullTitle = path === "/" ? title : `${title} | ${b.tradeName}`;
  return `<!doctype html>
<html lang="${site.lang}">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(fullTitle)}</title>
<meta name="description" content="${esc(description)}">
${noindex ? '<meta name="robots" content="noindex">\n' : ""}<link rel="canonical" href="${url}">
<link rel="icon" href="/favicon.ico" sizes="32x32">
<link rel="icon" href="/favicon.svg" type="image/svg+xml">
<link rel="apple-touch-icon" href="/apple-touch-icon.png">
<meta name="theme-color" content="#0b5cab">
<meta property="og:type" content="website">
<meta property="og:locale" content="${site.locale}">
<meta property="og:site_name" content="${esc(b.tradeName)}">
<meta property="og:title" content="${esc(fullTitle)}">
<meta property="og:description" content="${esc(description)}">
<meta property="og:url" content="${url}">
<meta property="og:image" content="${site.url}/og-image.png">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta property="og:image:alt" content="${esc(b.tradeName)}">
<!-- META_DOMAIN_VERIFICATION -->
<link rel="stylesheet" href="/styles.css">
</head>
<body>
<header class="site-header">
  <div class="wrap header-row">
    <a class="brand" href="/">${esc(b.tradeName)}</a>
    <nav aria-label="Principal">
      ${nav.map((n) => `<a href="${n.href}"${n.href === path ? ' aria-current="page"' : ""}>${esc(n.label)}</a>`).join("\n      ")}
    </nav>
  </div>
</header>
<main>
${body}
</main>
${footer()}
</body>
</html>
`;
}
