import { motion } from 'framer-motion'

export default function PrivacyPolicy() {
  return (
    <main className="pt-20">
      <section className="bg-cacao-900 py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="font-montserrat font-black text-3xl md:text-5xl text-cream mb-4">
              Política de Privacidad
            </h1>
            <p className="text-cream/60 text-sm">Última actualización: {new Date().toLocaleDateString('es-CO', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 px-4 bg-cream">
        <div className="max-w-3xl mx-auto prose prose-cacao">
          <div className="space-y-10 text-cacao-700 leading-relaxed">

            <div className="bg-cacao-50 rounded-2xl p-6 border border-cacao-200">
              <p className="text-sm">
                En <strong className="text-cacao-800">Casa Opón – Chocolate Artesanal de Origen</strong>, respetamos tu privacidad y nos comprometemos a proteger tus datos personales. Esta política describe cómo recopilamos, usamos y protegemos tu información.
              </p>
            </div>

            {[
              {
                title: '1. Información que recopilamos',
                content: `Al interactuar con nuestro sitio web o contactarnos, podemos recopilar:

• Nombre y datos de contacto (nombre, teléfono, correo electrónico)
• Dirección de entrega para pedidos
• Información de conversaciones por WhatsApp
• Datos de navegación en nuestro sitio web (cookies)

Esta información se recopila únicamente cuando la proporcionas voluntariamente.`,
              },
              {
                title: '2. Uso de la información',
                content: `Usamos tu información para:

• Procesar y gestionar tus pedidos
• Comunicarnos contigo sobre tu compra
• Enviarte información sobre productos y promociones (solo si lo autorizas)
• Mejorar nuestros servicios y experiencia de usuario
• Cumplir con obligaciones legales aplicables en Colombia`,
              },
              {
                title: '3. WhatsApp y comunicación',
                content: `Al contactarnos por WhatsApp, aceptas que tus mensajes son gestionados por el equipo de Casa Opón para atender tu solicitud. No compartimos tus datos con terceros para fines de marketing sin tu consentimiento explícito.`,
              },
              {
                title: '4. Cookies',
                content: `Nuestro sitio web puede usar cookies para mejorar tu experiencia de navegación. Las cookies son pequeños archivos de texto que se almacenan en tu dispositivo. Puedes configurar tu navegador para rechazar cookies, aunque esto podría afectar algunas funciones del sitio.`,
              },
              {
                title: '5. Compartición de datos',
                content: `Casa Opón no vende, alquila ni comparte tu información personal con terceros, excepto:

• Con transportistas y mensajeros para gestionar entregas
• Con autoridades competentes cuando la ley lo requiera
• Con proveedores de servicio que nos ayudan a operar el sitio (bajo acuerdos de confidencialidad)`,
              },
              {
                title: '6. Seguridad de los datos',
                content: `Implementamos medidas de seguridad razonables para proteger tu información contra acceso no autorizado, pérdida o divulgación. Sin embargo, ningún método de transmisión por Internet es 100% seguro.`,
              },
              {
                title: '7. Tus derechos',
                content: `De acuerdo con la Ley 1581 de 2012 (Colombia), tienes derecho a:

• Conocer los datos que tenemos sobre ti
• Actualizar o corregir tu información
• Solicitar la eliminación de tus datos
• Revocar la autorización para el uso de tus datos

Para ejercer estos derechos, escríbenos a: hola@casaopon.com`,
              },
              {
                title: '8. Menores de edad',
                content: `Nuestro sitio web no está dirigido a menores de 14 años. Si eres padre o tutor y crees que tu hijo nos ha proporcionado datos personales, contáctanos para eliminarlos.`,
              },
              {
                title: '9. Cambios en esta política',
                content: `Podemos actualizar esta política de privacidad ocasionalmente. Los cambios se publicarán en esta página con la fecha de actualización. Te recomendamos revisarla periódicamente.`,
              },
              {
                title: '10. Contacto',
                content: `Si tienes preguntas sobre esta política de privacidad, contáctanos:

📧 hola@casaopon.com
📱 WhatsApp: +57 300 000 0000
📍 Bogotá, Colombia
🌐 @casaopon.chocolate`,
              },
            ].map((section) => (
              <div key={section.title} className="bg-white rounded-2xl p-7 border border-cacao-100 shadow-sm">
                <h2 className="font-montserrat font-bold text-xl text-cacao-800 mb-4">{section.title}</h2>
                <div className="space-y-2">
                  {section.content.split('\n').map((line, i) => (
                    <p key={i} className={`text-sm ${line.startsWith('•') ? 'pl-4' : ''}`}>
                      {line || '\u00A0'}
                    </p>
                  ))}
                </div>
              </div>
            ))}

          </div>
        </div>
      </section>
    </main>
  )
}
