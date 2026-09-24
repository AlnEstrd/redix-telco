// Genera el sitio estático en _static/: HTML completo por página (sin JavaScript),
// robots.txt, sitemap.xml y los archivos de public/.
import { cpSync, mkdirSync, rmSync, writeFileSync, copyFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { site } from "./site.config.mjs";
import { layout } from "./src/layout.mjs";
import { pages, extraPages } from "./src/pages.mjs";
import { findPlaceholders } from "./scripts/placeholders.mjs";

const OUT = "_static";

const outFile = (page) =>
  page.file ?? (page.path === "/" ? "index.html" : join(page.path.slice(1), "index.html"));

rmSync(OUT, { recursive: true, force: true });
mkdirSync(OUT, { recursive: true });
cpSync("public", OUT, { recursive: true });
copyFileSync("src/styles.css", join(OUT, "styles.css"));

for (const page of [...pages, ...extraPages]) {
  const file = join(OUT, outFile(page));
  mkdirSync(dirname(file), { recursive: true });
  writeFileSync(file, layout(page));
  console.log(`  ${page.path.padEnd(24)} -> ${file}`);
}

writeFileSync(
  join(OUT, "robots.txt"),
  `User-agent: *\nAllow: /\n\nSitemap: ${site.url}/sitemap.xml\n`,
);

const today = new Date().toISOString().slice(0, 10);
writeFileSync(
  join(OUT, "sitemap.xml"),
  `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map((p) => `  <url><loc>${site.url}${p.path}</loc><lastmod>${today}</lastmod></url>`).join("\n")}
</urlset>
`,
);

const missing = findPlaceholders();
if (missing.length) {
  console.warn(
    `\n⚠️  Quedan ${missing.length} datos sin completar en site.config.mjs:\n` +
      missing.map((m) => `   - ${m.key}: ${m.value}`).join("\n") +
      "\n   No envíes el sitio a verificación de Meta hasta reemplazarlos.\n",
  );
}
console.log(`\nSitio generado en ${OUT}/`);
