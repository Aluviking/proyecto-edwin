import { motion } from 'framer-motion'
import { Leaf, Award, Heart, Truck, Shield, Users } from 'lucide-react'

const features = [
  { icon: Leaf, label: '100% Orgánico', desc: 'Sin pesticidas ni químicos' },
  { icon: Award, label: 'Artesanal', desc: 'Hecho en pequeños lotes' },
  { icon: Heart, label: 'Finca Familiar', desc: 'De Santa Rita del Opón' },
  { icon: Shield, label: 'Sin Aditivos', desc: 'Pureza garantizada' },
  { icon: Truck, label: 'Envío a Domicilio', desc: 'Llegamos a tu barrio' },
  { icon: Users, label: 'Cacao Colombiano', desc: 'Apoyo al productor local' },
]

export default function FeaturesBar() {
  return (
    <section className="bg-cacao-800 py-8 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {features.map((f, i) => (
            <motion.div
              key={f.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07, duration: 0.4 }}
              className="flex flex-col items-center text-center gap-2 py-2 group"
            >
              <div className="w-10 h-10 rounded-2xl bg-cacao-700/50 flex items-center justify-center
                group-hover:bg-cacao-600/50 transition-colors">
                <f.icon size={20} className="text-beige" />
              </div>
              <div>
                <p className="font-montserrat font-bold text-xs text-cream uppercase tracking-wider">{f.label}</p>
                <p className="font-montserrat text-xs text-cream/60">{f.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
