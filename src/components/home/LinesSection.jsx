import { motion } from 'framer-motion'
import { ArrowRight, Heart, Dumbbell, Baby, Leaf, Shield, Zap } from 'lucide-react'
import { Link } from 'react-router-dom'

const lines = [
  {
    id: 'salud',
    emoji: '🌿',
    icon: Heart,
    title: 'Línea Salud',
    subtitle: 'Cuida tu bienestar',
    description: 'Para quienes eligen vivir sano sin sacrificar el placer. Cacao puro, sin azúcar añadida, rico en antioxidantes y flavonoides naturales.',
    benefits: [
      'Antioxidantes naturales del cacao',
      'Mejora el estado de ánimo',
      'Apoya la salud cardiovascular',
      'Sin azúcares añadidos',
    ],
    color: 'from-leaf-700 to-leaf-500',
    bg: 'bg-leaf-50',
    border: 'border-leaf-200',
    badgeColor: 'bg-leaf-100 text-leaf-700 border-leaf-200',
    href: '/lineas/salud',
    cta: 'Explorar Línea Salud',
    tag: '🌱 Natural & Puro',
  },
  {
    id: 'gym',
    emoji: '💪',
    icon: Dumbbell,
    title: 'Línea Proteína Gym',
    subtitle: 'Potencia tu entrenamiento',
    description: 'El secreto de los gym bros conscientes. Cacao de alto contenido proteico, energía natural, sin azúcar. Combinado con tu rutina para resultados increíbles.',
    benefits: [
      'Alta concentración de proteína vegetal',
      'Energía sostenida sin crash',
      'Magnesio natural para músculos',
      'Perfecto post-entrenamiento',
    ],
    color: 'from-cacao-800 to-cacao-600',
    bg: 'bg-cacao-50',
    border: 'border-cacao-200',
    badgeColor: 'bg-cacao-100 text-cacao-700 border-cacao-200',
    href: '/lineas/gym',
    cta: 'Ver Línea Gym',
    tag: '⚡ Alta Energía',
  },
  {
    id: 'ninos',
    emoji: '🧒',
    icon: Baby,
    title: 'Línea Niños',
    subtitle: 'Cuida el azúcar de los pequeños',
    description: 'Porque los niños merecen lo mejor sin comprometer su salud. Chocolate bajo en azúcar, sin colorantes artificiales. El sabor que les encanta, la tranquilidad que tú necesitas.',
    benefits: [
      'Bajo contenido de azúcar',
      'Sin colorantes artificiales',
      'Sin saborizantes',
      'Aprobado por nutricionistas',
    ],
    color: 'from-amber-600 to-amber-400',
    bg: 'bg-amber-50',
    border: 'border-amber-200',
    badgeColor: 'bg-amber-100 text-amber-700 border-amber-200',
    href: '/lineas/ninos',
    cta: 'Línea para Niños',
    tag: '💛 Sin Azúcar Extra',
  },
]

export default function LinesSection() {
  return (
    <section className="py-20 lg:py-28 bg-cream" id="lineas">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="badge mb-4">Líneas de Negocio</span>
          <h2 className="section-title">
            Un cacao para<br />
            <span className="font-playfair italic text-cacao-600 font-normal">cada estilo de vida</span>
          </h2>
          <p className="mt-4 text-cacao-600 max-w-2xl mx-auto">
            Desde líneas de bienestar hasta proteína para el gym. El cacao de Casa Opón se adapta
            a tus necesidades sin perder su esencia 100% natural.
          </p>
        </motion.div>

        {/* Lines grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {lines.map((line, i) => (
            <motion.div
              key={line.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className={`relative ${line.bg} rounded-3xl border ${line.border} overflow-hidden group card-hover`}
            >
              {/* Top gradient band */}
              <div className={`bg-gradient-to-r ${line.color} h-2 w-full`} />

              <div className="p-7">
                {/* Icon + tag */}
                <div className="flex items-start justify-between mb-5">
                  <div className="text-5xl">{line.emoji}</div>
                  <span className={`text-xs font-bold px-3 py-1.5 rounded-full border ${line.badgeColor}`}>
                    {line.tag}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-montserrat font-black text-xl text-cacao-800 mb-1">{line.title}</h3>
                <p className="font-playfair italic text-cacao-500 text-sm mb-4">{line.subtitle}</p>

                <p className="text-cacao-700 text-sm leading-relaxed mb-6">{line.description}</p>

                {/* Benefits */}
                <ul className="space-y-2 mb-7">
                  {line.benefits.map((b) => (
                    <li key={b} className="flex items-center gap-2.5 text-sm text-cacao-700">
                      <div className={`w-5 h-5 rounded-full bg-gradient-to-br ${line.color} flex items-center justify-center flex-shrink-0`}>
                        <Leaf size={10} className="text-white" />
                      </div>
                      {b}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Link to={line.href} className="btn-primary w-full justify-center text-xs py-2.5">
                  {line.cta}
                  <ArrowRight size={14} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Big CTA banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-16 bg-gradient-to-br from-cacao-800 to-cacao-900 rounded-3xl p-8 md:p-12 text-center relative overflow-hidden"
        >
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-0 left-0 w-40 h-40 bg-white rounded-full -translate-x-20 -translate-y-20" />
            <div className="absolute bottom-0 right-0 w-60 h-60 bg-white rounded-full translate-x-20 translate-y-20" />
          </div>
          <div className="relative">
            <span className="inline-flex items-center gap-2 bg-cream/10 text-cream/80 text-xs font-semibold
              uppercase tracking-widest px-4 py-2 rounded-full border border-cream/20 mb-5">
              <Shield size={12} />
              Apoya el cacao colombiano
            </span>
            <h3 className="font-montserrat font-black text-2xl md:text-4xl text-cream mb-4">
              Cacao de Santander,<br />
              <span className="font-playfair italic text-beige font-normal">100% orgánico y sin aditivos</span>
            </h3>
            <p className="text-cream/70 max-w-xl mx-auto mb-8">
              Al elegir Casa Opón, apoyás directamente a una familia cacaotera colombiana.
              Un producto limpio, honesto y lleno de tradición.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link to="/quienes-somos" className="btn-primary bg-cream text-cacao-800 hover:bg-white">
                Conocer Nuestra Historia
                <ArrowRight size={16} />
              </Link>
              <Link to="/productos" className="btn-outline-white">
                Ver Todos los Productos
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
