import { site, business as b } from "../site.config.mjs";
import { esc, waButton } from "./layout.mjs";

const contactList = () => `<ul class="contact-list">
  <li><strong>WhatsApp / Teléfono:</strong> <a href="tel:${b.phoneE164}">${esc(b.phoneDisplay)}</a></li>
  <li><strong>Correo:</strong> <a href="mailto:${b.email}">${esc(b.email)}</a></li>
  <li><strong>Domicilio:</strong> ${esc(b.address)}</li>
  <li><strong>Horario de atención:</strong> ${esc(b.hours)}</li>
</ul>`;

const home = {
  path: "/",
  title: `${b.tradeName} | Contratación de internet para hogar y negocio`,
  description: `${b.tradeName} te ayuda a contratar internet para tu hogar o negocio: gestionamos la solicitud, damos seguimiento a la instalación y te brindamos soporte.`,
  body: `
<section class="hero">
  <div class="wrap">
    <h1>${esc(b.tradeName)}</h1>
    <p class="lead">Te ayudamos a contratar internet para tu hogar o negocio. Gestionamos tu solicitud, damos seguimiento a la instalación y te acompañamos con soporte.</p>
    ${waButton()}
  </div>
</section>

<section class="wrap section">
  <h2>Qué hacemos</h2>
  <p>En ${esc(b.shortName)} ayudamos a personas y empresas a contratar servicio de internet para hogar y negocio. Nos encargamos de gestionar la solicitud, dar seguimiento a la instalación y brindar soporte durante el proceso.</p>
  <p>El servicio de internet lo prestan proveedores externos. Somos un intermediario independiente: trabajamos con los principales proveedores de internet, pero no somos uno de ellos ni estamos afiliados oficialmente a ninguno.</p>
</section>

<section class="wrap section">
  <h2>Cómo funciona</h2>
  <ol class="steps">
    <li><h3>1. Escríbenos</h3><p>Contáctanos por WhatsApp o correo y cuéntanos qué servicio necesitas y dónde.</p></li>
    <li><h3>2. Gestionamos tu solicitud</h3><p>Revisamos las opciones disponibles en tu domicilio y tramitamos la contratación con el proveedor.</p></li>
    <li><h3>3. Seguimiento y soporte</h3><p>Damos seguimiento a tu instalación y te apoyamos si tienes dudas o problemas.</p></li>
  </ol>
</section>

<section class="wrap section">
  <h2>Zona de cobertura</h2>
  <p>Atendemos solicitudes en: ${esc(b.coverageArea)}.</p>
  <p>La disponibilidad del servicio depende de la infraestructura de cada proveedor en tu domicilio. Escríbenos y lo verificamos contigo.</p>
</section>

<section class="wrap section" id="contacto">
  <h2>Contacto</h2>
  ${contactList()}
  ${waButton()}
</section>
`,
};

const contacto = {
  path: "/contacto",
  title: "Contacto",
  description: `Contacta a ${b.tradeName} por WhatsApp al ${b.phoneDisplay} o por correo a ${b.email}.`,
  body: `
<section class="wrap section page">
  <h1>Contacto</h1>
  <p>Escríbenos para contratar internet para tu hogar o negocio, dar seguimiento a una instalación o solicitar soporte.</p>
  ${contactList()}
  ${waButton()}
  <h2>Datos del responsable</h2>
  <ul class="contact-list">
    <li><strong>Nombre comercial:</strong> ${esc(b.tradeName)}</li>
    <li><strong>Razón social:</strong> ${esc(b.legalName)}</li>
    <li><strong>RFC:</strong> ${esc(b.rfc)}</li>
  </ul>
</section>
`,
};

const privacidad = {
  path: "/privacidad",
  title: "Aviso de Privacidad",
  description: `Aviso de Privacidad integral de ${b.tradeName}: datos que recabamos, finalidades, uso de WhatsApp y cómo ejercer tus derechos ARCO.`,
  body: `
<article class="wrap section page legal">
  <h1>Aviso de Privacidad</h1>
  <p class="meta">Última actualización: ${esc(site.lastUpdated)}</p>

  <h2>1. Identidad y domicilio del responsable</h2>
  <p>${esc(b.legalName)} (en adelante, “${esc(b.tradeName)}” o “el Responsable”), con RFC ${esc(b.rfc)} y domicilio en ${esc(b.address)}, es responsable del tratamiento de tus datos personales conforme a la Ley Federal de Protección de Datos Personales en Posesión de los Particulares y demás normativa aplicable.</p>
  <p>Contacto para temas de privacidad: <a href="mailto:${b.email}">${esc(b.email)}</a> · Teléfono / WhatsApp: ${esc(b.phoneDisplay)}.</p>

  <h2>2. Datos personales que recabamos</h2>
  <p>Recabamos los siguientes datos personales, que tú nos proporcionas directamente por WhatsApp, correo electrónico o teléfono:</p>
  <ul>
    <li>Nombre.</li>
    <li>Número de teléfono.</li>
    <li>Domicilio donde se instalará el servicio.</li>
    <li>El contenido de los mensajes que nos envías por WhatsApp.</li>
  </ul>
  <p>No recabamos datos personales sensibles.</p>

  <h2>3. Finalidades del tratamiento</h2>
  <p><strong>Finalidades primarias</strong> (necesarias para el servicio que nos solicitas):</p>
  <ul>
    <li>Atender tus solicitudes y responder tus mensajes.</li>
    <li>Verificar la disponibilidad del servicio de internet en tu domicilio.</li>
    <li>Gestionar la solicitud de contratación ante el proveedor de internet.</li>
    <li>Dar seguimiento a la instalación y brindarte soporte.</li>
  </ul>
  <p><strong>Finalidades secundarias</strong> (no necesarias para el servicio): enviarte información sobre opciones de servicio que puedan interesarte. Si no deseas que tus datos se usen para esta finalidad, envía un correo a <a href="mailto:${b.email}">${esc(b.email)}</a> con el asunto “NO FINALIDADES SECUNDARIAS”. Tu negativa no afectará el servicio que nos solicitas.</p>

  <h2>4. Uso de WhatsApp (Meta) como encargado</h2>
  <p>Utilizamos WhatsApp Business, servicio de Meta Platforms, Inc. y sus filiales, para comunicarnos contigo. Los mensajes que intercambiamos por WhatsApp se transmiten y almacenan a través de la infraestructura de Meta, que actúa como encargado del tratamiento de acuerdo con sus propios términos y políticas de privacidad. Te recomendamos consultar la política de privacidad de WhatsApp en <a href="https://www.whatsapp.com/legal/privacy-policy" rel="noopener">whatsapp.com/legal/privacy-policy</a>.</p>

  <h2>5. Transferencias de datos</h2>
  <p>Para gestionar tu contratación, compartimos tu nombre, teléfono y domicilio con el proveedor de internet que elijas. Esta transferencia es necesaria para cumplir la relación jurídica que solicitas, por lo que no requiere tu consentimiento conforme a la ley aplicable. No vendemos ni compartimos tus datos con terceros para otros fines.</p>

  <h2>6. Derechos ARCO</h2>
  <p>Tienes derecho a <strong>Acceder</strong> a tus datos personales, <strong>Rectificarlos</strong> si son inexactos o incompletos, <strong>Cancelarlos</strong> cuando consideres que no se requieren para las finalidades señaladas, y <strong>Oponerte</strong> a su tratamiento para fines específicos (derechos ARCO).</p>
  <p>Para ejercerlos, envía una solicitud a <a href="mailto:${b.email}">${esc(b.email)}</a> que incluya:</p>
  <ul>
    <li>Tu nombre y un medio para comunicarte tu respuesta.</li>
    <li>Un documento que acredite tu identidad (o, en su caso, la representación legal).</li>
    <li>La descripción clara del derecho que deseas ejercer y de los datos involucrados.</li>
    <li>Cualquier otro elemento que facilite la localización de tus datos.</li>
  </ul>
  <p>Te responderemos en un plazo máximo de 20 días hábiles contados desde la recepción de tu solicitud completa. Si resulta procedente, la haremos efectiva dentro de los 15 días hábiles siguientes a la respuesta.</p>
  <p>Para solicitar específicamente la eliminación de tus datos, consulta también nuestras <a href="/eliminacion-de-datos">instrucciones de eliminación de datos</a>.</p>

  <h2>7. Revocación del consentimiento y limitación del uso</h2>
  <p>Puedes revocar tu consentimiento o limitar el uso y divulgación de tus datos enviando un correo a <a href="mailto:${b.email}">${esc(b.email)}</a>, siguiendo el mismo procedimiento de los derechos ARCO. En algunos casos no podremos atender la solicitud de inmediato si una obligación legal nos exige seguir tratando tus datos.</p>

  <h2>8. Cookies y tecnologías de rastreo</h2>
  <p>Este sitio web no utiliza cookies ni tecnologías de rastreo, y no recaba datos personales por sí mismo.</p>

  <h2>9. Cambios a este aviso</h2>
  <p>Podemos modificar este Aviso de Privacidad por cambios legales o en nuestros procesos. Cualquier cambio se publicará en esta misma página (<a href="${site.url}/privacidad">${site.url.replace("https://", "")}/privacidad</a>) indicando la fecha de última actualización.</p>

  <h2>10. Autoridad</h2>
  <p>Si consideras que tu derecho a la protección de datos personales ha sido vulnerado, puedes acudir ante la autoridad competente en materia de protección de datos personales.</p>
</article>
`,
};

const terminos = {
  path: "/terminos",
  title: "Términos y Condiciones",
  description: `Términos y Condiciones de ${b.tradeName}, intermediario independiente para la contratación de internet para hogar y negocio.`,
  body: `
<article class="wrap section page legal">
  <h1>Términos y Condiciones</h1>
  <p class="meta">Última actualización: ${esc(site.lastUpdated)}</p>

  <h2>1. Quiénes somos</h2>
  <p>Estos Términos y Condiciones regulan los servicios que ofrece ${esc(b.legalName)}, con nombre comercial ${esc(b.tradeName)}, RFC ${esc(b.rfc)} y domicilio en ${esc(b.address)}.</p>

  <h2>2. Naturaleza del servicio</h2>
  <p>${esc(b.tradeName)} es un <strong>intermediario independiente</strong>. Ayudamos a personas y empresas a contratar servicio de internet para hogar y negocio: gestionamos la solicitud, damos seguimiento a la instalación y brindamos soporte.</p>
  <p>El servicio de internet lo presta directamente un proveedor externo. No somos un proveedor de telecomunicaciones, no operamos redes y no estamos afiliados oficialmente a ningún proveedor. El contrato de servicio de internet se celebra entre tú y el proveedor.</p>

  <h2>3. Disponibilidad</h2>
  <p>No garantizamos la disponibilidad del servicio de ningún proveedor en un domicilio determinado, ni los tiempos de instalación. La cobertura, disponibilidad y fechas de instalación dependen exclusivamente del proveedor.</p>

  <h2>4. Precios y condiciones del proveedor</h2>
  <p>Los precios, tarifas, planes, velocidades, plazos forzosos y demás condiciones comerciales son definidos por el proveedor de internet y pueden cambiar sin previo aviso. La información que te compartamos es orientativa; las condiciones vinculantes son las del contrato que firmes con el proveedor.</p>

  <h2>5. Tus responsabilidades</h2>
  <p>Te comprometes a proporcionarnos información veraz y completa, y a revisar las condiciones del proveedor antes de contratar.</p>

  <h2>6. Limitación de responsabilidad</h2>
  <p>En la medida permitida por la ley, ${esc(b.tradeName)} no será responsable por la calidad, continuidad, velocidad, fallas, interrupciones ni facturación del servicio de internet, que son responsabilidad del proveedor. Nuestra responsabilidad se limita a la correcta gestión de la solicitud que nos encargues. Nada en estos términos limita los derechos que te otorga la Ley Federal de Protección al Consumidor.</p>

  <h2>7. Datos personales</h2>
  <p>El tratamiento de tus datos personales se rige por nuestro <a href="/privacidad">Aviso de Privacidad</a>.</p>

  <h2>8. Cambios</h2>
  <p>Podemos actualizar estos términos. La versión vigente siempre estará publicada en esta página con su fecha de última actualización.</p>

  <h2>9. Ley aplicable y jurisdicción</h2>
  <p>Estos términos se rigen por las leyes de los Estados Unidos Mexicanos. Para cualquier controversia, las partes se someten a los tribunales competentes de México, sin perjuicio de los derechos que correspondan al consumidor ante la Procuraduría Federal del Consumidor (Profeco).</p>

  <h2>10. Contacto</h2>
  ${contactList()}
</article>
`,
};

const eliminacion = {
  path: "/eliminacion-de-datos",
  title: "Instrucciones de eliminación de datos",
  description: `Cómo solicitar a ${b.tradeName} la eliminación de tus datos personales, incluidos tus mensajes de WhatsApp.`,
  body: `
<article class="wrap section page legal">
  <h1>Instrucciones de eliminación de datos</h1>
  <p class="meta">Última actualización: ${esc(site.lastUpdated)}</p>

  <p>Puedes solicitar en cualquier momento que ${esc(b.tradeName)} elimine los datos personales que tenemos sobre ti (nombre, teléfono, domicilio y mensajes de WhatsApp). Usa cualquiera de estas dos opciones:</p>

  <h2>Opción 1: por WhatsApp</h2>
  <p>Envía el mensaje <strong>ELIMINAR MIS DATOS</strong> al <a href="${b.whatsappUrl}?text=ELIMINAR%20MIS%20DATOS" rel="noopener">${esc(b.phoneDisplay)}</a> desde el número que usaste para comunicarte con nosotros.</p>

  <h2>Opción 2: por correo electrónico</h2>
  <p>Escribe a <a href="mailto:${b.email}?subject=ELIMINAR%20MIS%20DATOS">${esc(b.email)}</a> con el asunto <strong>ELIMINAR MIS DATOS</strong>, indicando tu nombre y el número de teléfono con el que te comunicaste con nosotros.</p>

  <h2>Qué pasa después</h2>
  <ul>
    <li>Confirmaremos la recepción de tu solicitud por el mismo medio.</li>
    <li>Podremos pedirte información adicional para verificar tu identidad y evitar eliminaciones no autorizadas.</li>
    <li>Te responderemos en un plazo máximo de 20 días hábiles y, si procede, eliminaremos tus datos dentro de los 15 días hábiles siguientes.</li>
    <li>Solo conservaremos la información que una ley nos obligue a mantener, y únicamente durante el plazo que esa ley establezca.</li>
  </ul>
  <p>Ten en cuenta que los datos que ya hayamos transferido a un proveedor de internet para tramitar tu contratación deben solicitarse también directamente a ese proveedor. Los mensajes que permanezcan en tu propia aplicación de WhatsApp puedes borrarlos tú desde tu dispositivo.</p>
  <p>Más información en nuestro <a href="/privacidad">Aviso de Privacidad</a>.</p>
</article>
`,
};

const notFound = {
  path: "/404",
  file: "404.html",
  title: "Página no encontrada",
  description: `La página que buscas no existe en el sitio de ${b.tradeName}.`,
  noindex: true,
  body: `
<section class="wrap section page">
  <h1>Página no encontrada</h1>
  <p>La página que buscas no existe. <a href="/">Volver al inicio</a>.</p>
</section>
`,
};

export const pages = [home, contacto, privacidad, terminos, eliminacion];
export const extraPages = [notFound];
