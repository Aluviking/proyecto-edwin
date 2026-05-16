import { motion } from 'framer-motion'
import { ArrowRight, Star } from 'lucide-react'
import { Link } from 'react-router-dom'

const testimonials = [
  { name: 'María C.', city: 'Bogotá', text: 'El chocolate de mesa más rico que he probado. Se siente el sabor auténtico del cacao.', stars: 5 },
  { name: 'Carlos R.', city: 'Medellín', text: 'El cacao en polvo es increíble para mis batidos post-entreno. 100% recomendado.', stars: 5 },
  { name: 'Juliana M.', city: 'Bogotá', text: 'Por fin un chocolate sin tantos aditivos. Mis hijos lo adoran y yo sé que es sano.', stars: 5 },
]

export default function CTABanner() {
  return (
    <>
      {/* Testimonials Section */}
      <section className="py-16 bg-cacao-800 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <h3 className="font-montserrat font-black text-2xl md:text-3xl text-cream mb-2">
              Lo que dicen nuestros clientes
            </h3>
            <p className="font-playfair italic text-beige/80">"Tradición que se siente, sabor que nos une"</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-cacao-700/40 backdrop-blur-sm border border-cacao-600 rounded-2xl p-6"
              >
                <div className="flex gap-0.5 mb-3">
                  {[...Array(t.stars)].map((_, j) => (
                    <Star key={j} size={14} className="text-amber-400" fill="currentColor" />
                  ))}
                </div>
                <p className="text-cream/90 text-sm leading-relaxed mb-4 italic font-playfair">"{t.text}"</p>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-beige rounded-full flex items-center justify-center">
                    <span className="text-cacao-800 font-bold text-xs">{t.name[0]}</span>
                  </div>
                  <div>
                    <p className="text-cream font-semibold text-sm">{t.name}</p>
                    <p className="text-cream/50 text-xs">{t.city}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Main CTA Banner */}
      <section className="relative py-20 lg:py-28 overflow-hidden bg-cream" id="contacto">
        <div className="max-w-7xl mx-auto px-4">
          <div className="relative bg-gradient-to-br from-cacao-700 via-cacao-800 to-cacao-900
            rounded-4xl p-10 md:p-16 lg:p-20 text-center overflow-hidden">

            {/* Decorations */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-beige/5 rounded-full -translate-x-32 -translate-y-32" />
            <div className="absolute bottom-0 right-0 w-80 h-80 bg-beige/5 rounded-full translate-x-40 translate-y-40" />
            <div className="absolute top-8 right-8 opacity-20 hidden md:block">
              <img src="/logos/sello.png" alt="" className="w-32 h-32 animate-float" />
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <span className="inline-flex items-center gap-2 bg-cream/10 text-cream/80 text-xs font-semibold
                uppercase tracking-widest px-4 py-2 rounded-full border border-cream/20 mb-6">
                🍫 De finca familiar a tu hogar
              </span>

              <h2 className="font-montserrat font-black text-3xl md:text-5xl lg:text-6xl text-cream
                leading-tight mb-4">
                Prueba el cacao<br />
                <span className="font-playfair italic text-beige font-normal">que Colombia merece</span>
              </h2>

              <p className="text-cream/70 max-w-2xl mx-auto text-lg mb-10 leading-relaxed">
                Hecho con amor en nuestra finca de Santa Rita del Opón, Santander.
                100% orgánico, sin aditivos, sin conservantes. Solo cacao puro y tradición.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://wa.me/573000000000?text=Hola%20Casa%20Op%C3%B3n%2C%20quiero%20hacer%20un%20pedido"
                  target="_blank"
                  rel="noreferrer"
                  className="btn-primary bg-cream text-cacao-800 hover:bg-white text-sm px-8 py-4 rounded-full"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  Hacer Pedido por WhatsApp
                </a>
                <Link to="/productos" className="btn-outline-white text-sm px-8 py-4 rounded-full">
                  Ver Catálogo Completo
                  <ArrowRight size={16} />
                </Link>
              </div>

              {/* Trust badges */}
              <div className="flex flex-wrap justify-center gap-6 mt-10 pt-8 border-t border-cream/10">
                {[
                  '✅ 100% Orgánico',
                  '✅ Sin Conservantes',
                  '✅ Finca Familiar',
                  '✅ Hecho en Colombia',
                ].map((badge) => (
                  <span key={badge} className="text-cream/60 text-sm font-semibold">{badge}</span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}
