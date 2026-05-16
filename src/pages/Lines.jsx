import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, ArrowLeft, Check } from 'lucide-react'

const linesData = {
  salud: {
    name: 'Línea Salud',
    subtitle: 'Bienestar natural con el poder del cacao',
    emoji: '🌿',
    color: 'from-leaf-800 to-leaf-600',
    bg: 'bg-leaf-50',
    description: 'Para quienes eligen vivir sano sin sacrificar el placer. El cacao de Casa Opón en su forma más pura: rico en antioxidantes, flavonoides y magnesio natural.',
    longDesc: `El cacao es uno de los alimentos más completos de la naturaleza. Rico en flavonoides que protegen el corazón, magnesio para el sistema nervioso y hierro para la energía. Nuestra Línea Salud te permite disfrutar de todos estos beneficios sin azúcares añadidos ni aditivos.\n\nIdeal para personas con diabetes, quienes llevan dietas cetogénicas, veganas o simplemente quieren reducir su consumo de azúcar sin renunciar al chocolate.`,
    benefits: [
      'Rico en flavonoides antioxidantes',
      'Magnesio natural para el sistema nervioso',
      'Hierro para la energía y vitalidad',
      'Sin azúcares añadidos',
      'Apto para dietas keto y veganas',
      'Mejora el estado de ánimo de forma natural',
      'Apoya la salud cardiovascular',
    ],
    products: ['Cacao en Polvo Sin Azúcar (250g)', 'Cacao en Polvo Sin Azúcar (500g)'],
    img: 'https://images.unsplash.com/photo-1571506165871-ee72a35bc9d4?w=800&q=80',
  },
  gym: {
    name: 'Línea Proteína Gym',
    subtitle: 'Potencia tu entrenamiento con cacao natural',
    emoji: '💪',
    color: 'from-cacao-900 to-cacao-700',
    bg: 'bg-cacao-50',
    description: 'El secreto de los gym bros conscientes. Cacao de alto contenido proteico, energía natural y sin azúcar. Maximiza tus resultados con lo mejor de la naturaleza colombiana.',
    longDesc: `El cacao natural es uno de los mejores aliados del deporte. Alto en proteína vegetal, magnesio para la contracción muscular, y teobromina (el "primo" natural de la cafeína) para energía sostenida sin el crash posterior.\n\nNuestra Línea Gym está formulada específicamente para quienes buscan potenciar su rendimiento de forma natural, sin recurrir a suplementos artificiales llenos de aditivos y colorantes.`,
    benefits: [
      'Alta concentración de proteína vegetal',
      'Magnesio natural para la contracción muscular',
      'Teobromina para energía sostenida',
      'Hierro para el rendimiento aeróbico',
      'Sin azúcares añadidos',
      'Perfecto en batidos pre y post-entreno',
      'Compatible con cualquier dieta fitness',
    ],
    products: ['Cacao en Polvo Gym (500g)', 'Pack Proteína Mensual'],
    img: 'https://images.unsplash.com/photo-1612203985729-70726954388c?w=800&q=80',
  },
  ninos: {
    name: 'Línea Niños',
    subtitle: 'Cuida el azúcar de los pequeños',
    emoji: '🧒',
    color: 'from-amber-700 to-amber-500',
    bg: 'bg-amber-50',
    description: 'Porque los niños merecen lo mejor sin comprometer su salud. Chocolate bajo en azúcar, sin colorantes ni saborizantes. El sabor que les encanta, la tranquilidad que tú necesitas.',
    longDesc: `Sabemos lo importante que es cuidar la alimentación de los niños, especialmente en cuanto al consumo de azúcar. Por eso desarrollamos una línea especial con menor contenido de azúcar, sin colorantes artificiales, sin saborizantes sintéticos y sin conservantes.\n\nNuestros productos para niños mantienen el sabor delicioso del chocolate artesanal colombiano, pero formulados para ser más amigables con la salud de los más pequeños. ¡Aprobados por mamás y pediatras!`,
    benefits: [
      'Bajo en azúcar vs el chocolate comercial',
      'Sin colorantes artificiales',
      'Sin saborizantes sintéticos',
      'Sin conservantes',
      'Cacao de calidad artesanal',
      'Sabor que los niños adoran',
      'Recomendado por nutricionistas',
    ],
    products: ['Chocolatina para Niños (30g)', 'Cacao en Polvo Bajo en Azúcar (250g)', 'Pack Familiar Niños'],
    img: 'https://images.unsplash.com/photo-1599599810769-bcde5a160d32?w=800&q=80',
  },
}

export default function Lines() {
  const { slug } = useParams()
  const line = linesData[slug]

  if (!line) {
    return (
      <main className="pt-32 px-4 text-center min-h-screen">
        <h1 className="text-3xl font-bold text-cacao-800 mb-4">Línea no encontrada</h1>
        <Link to="/" className="btn-primary">Volver al Inicio</Link>
      </main>
    )
  }

  return (
    <main className="pt-20">
      {/* Hero */}
      <section className={`bg-gradient-to-br ${line.color} py-24 px-4 relative overflow-hidden`}>
        <div className="absolute top-10 right-10 text-9xl opacity-10 select-none">{line.emoji}</div>
        <div className="max-w-4xl mx-auto relative">
          <Link to="/#lineas" className="inline-flex items-center gap-2 text-cream/70 hover:text-cream
            text-sm font-semibold mb-8 transition-colors">
            <ArrowLeft size={16} />
            Volver a Líneas
          </Link>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <div className="text-6xl mb-4">{line.emoji}</div>
            <h1 className="font-montserrat font-black text-4xl md:text-6xl text-cream mb-4">{line.name}</h1>
            <p className="font-playfair italic text-cream/80 text-xl mb-4">{line.subtitle}</p>
            <p className="text-cream/70 text-lg max-w-2xl leading-relaxed">{line.description}</p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className={`py-20 px-4 ${line.bg}`}>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="rounded-3xl overflow-hidden shadow-cacao-lg">
                <img src={line.img} alt={line.name} className="w-full h-[450px] object-cover" />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="section-title mb-6">¿Por qué esta línea?</h2>
              {line.longDesc.split('\n\n').map((para, i) => (
                <p key={i} className="text-cacao-700 leading-relaxed mb-4">{para}</p>
              ))}

              <h3 className="font-bold text-cacao-800 mt-8 mb-4">Beneficios clave:</h3>
              <div className="space-y-3 mb-8">
                {line.benefits.map((b) => (
                  <div key={b} className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-cacao-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Check size={13} className="text-cacao-700" />
                    </div>
                    <span className="text-cacao-700 text-sm">{b}</span>
                  </div>
                ))}
              </div>

              <h3 className="font-bold text-cacao-800 mb-4">Productos en esta línea:</h3>
              <ul className="space-y-2 mb-8">
                {line.products.map((p) => (
                  <li key={p} className="flex items-center gap-2 text-cacao-600 text-sm">
                    <span className="text-cacao-400">✦</span> {p}
                  </li>
                ))}
              </ul>

              <a
                href={`https://wa.me/573000000000?text=Hola%2C%20me%20interesa%20la%20${encodeURIComponent(line.name)}%20de%20Casa%20Op%C3%B3n`}
                target="_blank"
                rel="noreferrer"
                className="btn-primary"
              >
                Pedir por WhatsApp
                <ArrowRight size={16} />
              </a>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  )
}
