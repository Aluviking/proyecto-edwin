import { motion } from 'framer-motion'
import { Leaf, Heart, Award, MapPin, Users, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const values = [
  { icon: Leaf, title: 'Orgánico', desc: 'Cacao libre de pesticidas y químicos. Cultivado en armonía con la tierra.' },
  { icon: Heart, title: 'Con Amor', desc: 'Cada producto es elaborado a mano, con el cuidado de una finca familiar.' },
  { icon: Award, title: 'Calidad', desc: 'Selección rigurosa del cacao. Solo los mejores granos llegan a tu mesa.' },
  { icon: Users, title: 'Comunidad', desc: 'Apoyamos a productores locales y preservamos la tradición cacaotera colombiana.' },
]

export default function About() {
  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="bg-gradient-to-br from-cacao-900 to-cacao-800 py-24 px-4 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-10 w-64 h-64 border-2 border-beige rounded-full" />
          <div className="absolute bottom-10 left-10 w-40 h-40 border border-beige rounded-full" />
        </div>
        <div className="max-w-4xl mx-auto text-center relative">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <span className="badge bg-cacao-700/50 border-cacao-600 text-beige mb-6 inline-block">
              Quiénes Somos
            </span>
            <h1 className="font-montserrat font-black text-4xl md:text-6xl text-cream leading-tight mb-6">
              Una familia,<br />
              <span className="font-playfair italic text-beige font-normal">una tradición</span>
            </h1>
            <p className="text-cream/70 text-lg max-w-2xl mx-auto leading-relaxed">
              En Casa Opón transformamos el cacao santandereano de nuestra finca familiar
              en un chocolate artesanal, manteniendo la tradición y el sabor auténtico de Colombia.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 px-4 bg-cream" id="finca">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="badge mb-6">Nuestra Historia</span>
              <h2 className="section-title mb-6">
                De Santa Rita del Opón<br />
                <span className="font-playfair italic text-cacao-600 font-normal">a tu hogar</span>
              </h2>
              <div className="space-y-4 text-cacao-700 leading-relaxed">
                <p>
                  Casa Opón nació del amor por el cacao colombiano y la convicción de que lo mejor
                  que produce nuestra tierra merece llegar a cada hogar colombiano con toda su pureza.
                </p>
                <p>
                  Nuestra finca familiar está ubicada en <strong>Santa Rita del Opón, Santander</strong>,
                  una región con condiciones ideales para el cultivo del cacao: altura, humedad y un suelo
                  lleno de nutrientes que le dan a nuestro cacao un sabor único e inconfundible.
                </p>
                <p>
                  Elaboramos artesanalmente en Bogotá, en pequeños lotes, para garantizar que cada
                  producto llegue a ti con la frescura y el sabor que merece. Sin conservantes,
                  sin saborizantes artificiales. Solo tradición.
                </p>
                <div className="flex items-center gap-3 pt-2">
                  <div className="w-12 h-12 bg-cacao-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <MapPin size={22} className="text-cacao-700" />
                  </div>
                  <div>
                    <p className="font-bold text-cacao-800">Santa Rita del Opón · Santander</p>
                    <p className="text-sm text-cacao-500">Elaborado artesanalmente en Bogotá</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="rounded-3xl overflow-hidden shadow-cacao-lg">
                <img
                  src="https://images.unsplash.com/photo-1599599810769-bcde5a160d32?w=800&q=80"
                  alt="Finca Casa Opón - Cacao Santander"
                  className="w-full h-96 lg:h-[500px] object-cover"
                />
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-6 -left-6 bg-cacao-700 text-cream rounded-2xl p-5 shadow-cacao-lg">
                <img src="/logos/sello.png" alt="Sello Casa Opón" className="w-20 h-20" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-cacao-50 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <h2 className="section-title">Nuestros valores</h2>
            <p className="section-subtitle mt-2">Lo que nos define como marca</p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-3xl p-7 border border-cacao-100 shadow-cacao card-hover text-center"
              >
                <div className="w-14 h-14 bg-cacao-100 rounded-2xl flex items-center justify-center mx-auto mb-5">
                  <v.icon size={26} className="text-cacao-700" />
                </div>
                <h3 className="font-montserrat font-bold text-lg text-cacao-800 mb-2">{v.title}</h3>
                <p className="text-cacao-600 text-sm leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-cream px-4">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <h2 className="section-title">De la finca a tu mesa</h2>
            <p className="section-subtitle">Nuestro proceso artesanal</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
            {[
              { step: '01', icon: '🌱', title: 'Cultivo', desc: 'Cacao orgánico cultivado en las montañas de Santander' },
              { step: '02', icon: '☀️', title: 'Fermentación', desc: 'Proceso natural de fermentación que desarrolla los sabores' },
              { step: '03', icon: '🔥', title: 'Transformación', desc: 'Elaboración artesanal en pequeños lotes en Bogotá' },
              { step: '04', icon: '📦', title: 'Tu hogar', desc: 'Empacado fresco y enviado directamente a tu puerta' },
            ].map((p, i) => (
              <motion.div
                key={p.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12 }}
                className="text-center relative"
              >
                {i < 3 && (
                  <div className="hidden md:block absolute top-8 left-3/4 w-full border-t-2 border-dashed border-cacao-200 z-0" />
                )}
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-cacao-700 text-cream rounded-2xl flex items-center justify-center
                    mx-auto mb-4 text-2xl">
                    {p.icon}
                  </div>
                  <span className="text-xs font-bold text-cacao-400 uppercase tracking-widest">{p.step}</span>
                  <h4 className="font-bold text-cacao-800 mt-1 mb-2">{p.title}</h4>
                  <p className="text-cacao-600 text-sm">{p.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-cacao-800 px-4 text-center">
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
          <h3 className="font-montserrat font-black text-2xl md:text-4xl text-cream mb-4">
            ¿Listo para probar el auténtico cacao colombiano?
          </h3>
          <p className="text-cream/70 mb-8 max-w-xl mx-auto">
            Hecho con amor, desde nuestra familia a la tuya.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link to="/productos" className="btn-primary bg-cream text-cacao-800 hover:bg-white">
              Ver Productos <ArrowRight size={16} />
            </Link>
            <a href="https://wa.me/573000000000" target="_blank" rel="noreferrer"
              className="btn-outline-white">
              Contactar por WhatsApp
            </a>
          </div>
        </motion.div>
      </section>
    </main>
  )
}
