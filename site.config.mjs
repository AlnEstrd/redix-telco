// Única fuente de verdad de los datos del negocio.
// Todas las páginas (encabezado, pie, avisos legales) leen de aquí, así que
// el nombre, la dirección, el teléfono y el correo son idénticos en todo el sitio.
//
// IMPORTANTE: reemplaza cada valor entre [CORCHETES] con el dato EXACTO de tu
// Constancia de Situación Fiscal (CSF) del SAT antes de publicar.
// `npm run verify` falla mientras quede algún marcador sin reemplazar.

export const site = {
  url: "https://redixtelecomunicaciones.lat",
  lang: "es-MX",
  locale: "es_MX",
  lastUpdated: "24 de septiembre de 2026",
};

export const business = {
  tradeName: "Redix Telecomunicaciones",
  shortName: "Redix",
  legalName: "ANA ISABEL ROSALES MARTINEZ",
  rfc: "ROMA770911B94",
  address: "CALLE SALTILLO 214, COL. VALLE CEYLAN, C.P. 54150, TLALNEPANTLA DE BAZ, ESTADO DE MEXICO, MEXICO",
  phoneDisplay: "+52 229 896 2649",
  phoneE164: "+522298962649",
  whatsappUrl: "https://wa.me/522298962649",
  email: "contacto@redixtelecomunicaciones.lat",
  hours: "Lunes a viernes, 9:00 a 18:00 h",
  coverageArea: "[ZONA DE COBERTURA, p. ej. municipios o ciudades donde atienden]",
};
