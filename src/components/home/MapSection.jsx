import { motion } from 'framer-motion'
import { MapPin, Navigation, Phone, Clock, CheckCircle } from 'lucide-react'

const zones = [
  'Chapinero', 'Usaquén', 'Suba', 'Engativá', 'Fontibón',
  'Kennedy', 'Bosa', 'Ciudad Bolívar', 'Teusaquillo', 'Barrios Unidos',
  'Puente Aranda', 'Los Mártires', 'Antonio Nariño', 'Rafael Uribe', 'Candelaria',
]

export default function MapSection() {
  return (
    <section className="py-20 lg:py-28 bg-cacao-50" id="donde-estamos">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="badge mb-4">
            <MapPin size={12} />
            Cobertura
          </span>
          <h2 className="section-title">
            Ya estamos en<br />
            <span className="font-playfair italic text-cacao-600 font-normal">tu barrio</span>
          </h2>
          <p className="mt-4 text-cacao-600 max-w-2xl mx-auto">
            Casa Opón ya llegó cerca de ti. Consulta si hacemos entregas en tu zona
            y recibe nuestros productos frescos en la puerta de tu casa.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* Left: Info + zones */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            {/* Delivery info cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="bg-white rounded-2xl p-5 border border-cacao-200 shadow-cacao">
                <div className="w-10 h-10 bg-cacao-100 rounded-xl flex items-center justify-center mb-3">
                  <Navigation size={20} className="text-cacao-700" />
                </div>
                <h4 className="font-montserrat font-bold text-cacao-800 mb-1">Entrega a Domicilio</h4>
                <p className="text-cacao-600 text-sm">Bogotá y municipios cercanos. Envíos a toda Colombia.</p>
              </div>
              <div className="bg-white rounded-2xl p-5 border border-cacao-200 shadow-cacao">
                <div className="w-10 h-10 bg-leaf-100 rounded-xl flex items-center justify-center mb-3">
                  <Clock size={20} className="text-leaf-600" />
                </div>
                <h4 className="font-montserrat font-bold text-cacao-800 mb-1">Horario de Pedidos</h4>
                <p className="text-cacao-600 text-sm">Lun - Sáb: 8am - 6pm<br />Dom: 9am - 2pm</p>
              </div>
              <div className="bg-cacao-700 rounded-2xl p-5 sm:col-span-2">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-cream/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone size={20} className="text-cream" />
                  </div>
                  <div>
                    <h4 className="font-montserrat font-bold text-cream mb-0.5">¿Estamos cerca de ti?</h4>
                    <p className="text-cream/70 text-sm">Escríbenos por WhatsApp y confirma tu zona</p>
                  </div>
                  <a
                    href="https://wa.me/573000000000?text=Hola%20Casa%20Op%C3%B3n%2C%20%C2%BFhacen%20entregas%20en%20mi%20barrio%3F"
                    target="_blank"
                    rel="noreferrer"
                    className="ml-auto flex-shrink-0 bg-green-500 hover:bg-green-600 text-white font-semibold text-xs
                      px-4 py-2 rounded-full transition-colors flex items-center gap-2"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                    Consultar
                  </a>
                </div>
              </div>
            </div>

            {/* Zone chips */}
            <div>
              <h4 className="font-montserrat font-bold text-cacao-800 mb-3 text-sm uppercase tracking-wider">
                Localidades con cobertura en Bogotá:
              </h4>
              <div className="flex flex-wrap gap-2">
                {zones.map((zone) => (
                  <span key={zone} className="flex items-center gap-1.5 bg-white text-cacao-700 text-xs font-semibold
                    px-3 py-1.5 rounded-full border border-cacao-200 hover:border-cacao-400 hover:bg-cacao-50 transition-colors cursor-default">
                    <CheckCircle size={10} className="text-leaf-500" />
                    {zone}
                  </span>
                ))}
              </div>
              <p className="text-cacao-500 text-xs mt-3">
                * También enviamos a Cundinamarca, Santander y toda Colombia vía Coordinadora.
              </p>
            </div>
          </motion.div>

          {/* Right: Map embed */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="rounded-3xl overflow-hidden shadow-cacao-lg border border-cacao-200">
              <iframe
                title="Casa Opón - Bogotá, Colombia"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d254508.38520252186!2d-74.24789244335938!3d4.648615600000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9bfd2da6cb29%3A0x239d635520a33914!2sBogot%C3%A1%2C%20Colombia!5e0!3m2!1ses!2sco!4v1706000000000!5m2!1ses!2sco"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full"
              />
            </div>

            {/* Floating badge on map */}
            <div className="absolute -top-4 -right-4 bg-cacao-700 text-cream rounded-2xl px-4 py-3 shadow-cacao-lg">
              <div className="text-xs font-semibold uppercase tracking-wider mb-0.5 opacity-80">Cobertura</div>
              <div className="font-black text-lg leading-none">Bogotá</div>
              <div className="text-xs opacity-70">+ Toda Colombia</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
