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
  legalName: "[RAZÓN SOCIAL o NOMBRE COMPLETO DE PERSONA FÍSICA, exactamente como en el SAT]",
  rfc: "[RFC]",
  address: "[Calle, número, colonia, CP, municipio, estado, México]",
  phoneDisplay: "+52 229 896 2649",
  phoneE164: "+522298962649",
  whatsappUrl: "https://wa.me/522298962649",
  email: "contacto@redixtelecomunicaciones.lat",
  hours: "[Lun–Vie 9:00–18:00, Sáb …]",
  coverageArea: "[ZONA DE COBERTURA, p. ej. municipios o ciudades donde atienden]",
};
