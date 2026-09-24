// Verifica el sitio tal como lo ve un rastreador sin JavaScript (como el de Meta).
// Uso: node scripts/verify.mjs [URL base]   (por defecto https://redixtelecomunicaciones.lat)
import { site, business as b } from "../site.config.mjs";
import { pages } from "../src/pages.mjs";
import { esc } from "../src/layout.mjs";
import { findPlaceholders } from "./placeholders.mjs";

const base = (process.argv[2] ?? site.url).replace(/\/$/, "");
const carriers = /telmex|infinitum|totalplay|izzi|megacable|telcel|at&amp;t|at&t|starlink|axtel|dish|sky/i;
let failures = 0;

const check = (ok, label) => {
  console.log(`${ok ? "✔" : "✘"} ${label}`);
  if (!ok) failures++;
};

async function get(path) {
  const res = await fetch(base + path, { redirect: "manual" });
  return { status: res.status, location: res.headers.get("location"), text: await res.text() };
}

for (const page of pages) {
  const { status, location, text } = await get(page.path);
  console.log(`\n${base}${page.path}`);
  check(status === 200, `HTTP 200 sin redirección (recibido ${status}${location ? ` → ${location}` : ""})`);
  check(text.includes(`<html lang="${site.lang}">`), `lang="${site.lang}"`);
  check(/<title>[^<]+<\/title>/.test(text), "<title>");
  for (const tag of ['name="description"', 'property="og:title"', 'property="og:description"', 'property="og:url"', 'property="og:image"', 'rel="icon"']) {
    check(text.includes(tag), tag);
  }
  check(text.includes("<!-- META_DOMAIN_VERIFICATION -->") || text.includes('name="facebook-domain-verification"'), "marcador/meta de verificación de dominio de Meta");
  const footer = text.slice(text.indexOf('<footer class="site-footer">'));
  for (const [label, value] of [
    ["nombre comercial", b.tradeName],
    ["razón social", b.legalName],
    ["RFC", b.rfc],
    ["domicilio", b.address],
    ["teléfono", b.phoneDisplay],
    ["correo", b.email],
  ]) {
    check(footer.includes(esc(value)), `pie: ${label} (${value})`);
  }
  for (const p of pages.filter((p) => p.path !== "/")) {
    check(footer.includes(`href="${p.path}"`), `pie enlaza a ${p.path}`);
  }
  check(!carriers.test(text), "sin nombres de proveedores (Telmex, Infinitum, etc.)");
  check(!/<script/i.test(text), "sin JavaScript: todo el contenido está en el HTML");
}

console.log("\nArchivos");
const robots = await get("/robots.txt");
check(robots.status === 200 && /Allow: \//.test(robots.text), "robots.txt (Allow: /)");
const sitemap = await get("/sitemap.xml");
check(sitemap.status === 200, "sitemap.xml");
for (const p of pages) check(sitemap.text.includes(`<loc>${site.url}${p.path}</loc>`), `sitemap incluye ${p.path}`);
for (const f of ["/og-image.png", "/favicon.ico", "/favicon.svg"]) {
  check((await get(f)).status === 200, f);
}
check((await get("/esta-pagina-no-existe")).status === 404, "URL inexistente responde 404");

const missing = findPlaceholders();
check(missing.length === 0, `datos del negocio completos en site.config.mjs${missing.length ? ` (faltan: ${missing.map((m) => m.key).join(", ")})` : ""}`);

console.log(failures ? `\n${failures} verificación(es) fallida(s).` : "\nTodo correcto.");
process.exit(failures ? 1 : 0);
