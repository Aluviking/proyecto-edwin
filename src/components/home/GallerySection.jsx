import { motion } from 'framer-motion'
import { MapPin } from 'lucide-react'

const galleryItems = [
  { id: 1, caption: 'Mazorcas de cacao en nuestra finca familiar', location: 'Santa Rita del Opón, Santander', src: 'https://images.unsplash.com/photo-1599599810769-bcde5a160d32?w=800&q=80', span: 'col-span-2 row-span-2' },
  { id: 2, caption: 'Proceso artesanal de transformación', location: 'Hecho en Bogotá', src: 'https://images.unsplash.com/photo-1606312619070-d48b4c652a52?w=600&q=80', span: 'col-span-1 row-span-1' },
  { id: 3, caption: 'Granos de cacao frescos', location: 'Santa Rita del Opón', src: 'https://images.unsplash.com/photo-1548907040-4baa42d10919?w=600&q=80', span: 'col-span-1 row-span-1' },
  { id: 4, caption: 'Chocolate de mesa artesanal', location: 'Casa Opón Bogotá', src: 'https://images.unsplash.com/photo-1481391243133-f96216dcb5d2?w=600&q=80', span: 'col-span-1 row-span-2' },
  { id: 5, caption: 'Cacao colombiano de origen', location: 'Santander, Colombia', src: 'https://images.unsplash.com/photo-1612203985729-70726954388c?w=600&q=80', span: 'col-span-1 row-span-1' },
  { id: 6, caption: 'Producto terminado, listo para ti', location: 'De finca familiar a tu hogar', src: 'https://images.unsplash.com/photo-1571506165871-ee72a35bc9d4?w=600&q=80', span: 'col-span-1 row-span-1' },
]

export default function GallerySection() {
  return (
    <section className="py-20 lg:py-28 bg-cacao-900 overflow-hidden" id="galeria">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div>
            <span className="inline-flex items-center gap-2 bg-cacao-700/50 text-beige text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full border border-cacao-600 mb-4">
              <MapPin size={12} /> Santander · Colombia
            </span>
            <h2 className="font-montserrat font-black text-3xl md:text-4xl lg:text-5xl text-cream leading-tight">
              El cacao más puro<br /><span className="font-playfair italic text-beige font-normal">de Colombia</span>
            </h2>
          </div>
          <div className="lg:max-w-xs">
            <p className="text-cream/70 leading-relaxed text-sm mb-4">
              Nuestro cacao crece en las montañas de Santander, cultivado con amor por nuestra familia. Cada grano lleva en sí la esencia de la tierra colombiana.
            </p>
            <a href="https://instagram.com/casaopon.chocolate" target="_blank" rel="noreferrer"
              className="inline-flex items-center gap-2 text-beige hover:text-cream transition-colors text-sm font-semibold">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              @casaopon.chocolate
            </a>
          </div>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 lg:gap-4 auto-rows-[200px]">
          {galleryItems.map((item, i) => (
            <motion.div key={item.id} initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }} transition={{ delay: i * 0.08, duration: 0.4 }}
              className={`relative rounded-2xl overflow-hidden group cursor-pointer ${item.span}`}>
              <img src={item.src} alt={item.caption} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-cacao-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-cream text-sm font-semibold leading-tight">{item.caption}</p>
                <p className="text-cream/70 text-xs flex items-center gap-1 mt-1"><MapPin size={10} />{item.location}</p>
              </div>
              <div className="absolute inset-0 rounded-2xl ring-0 group-hover:ring-2 ring-beige/30 transition-all duration-300" />
            </motion.div>
          ))}
        </div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 pt-12 border-t border-cacao-700">
          {[
            { num: '100%', label: 'Cacao Natural', sub: 'Sin aditivos ni conservantes' },
            { num: '+10', label: 'Años de Tradición', sub: 'Finca familiar en Santander' },
            { num: '3', label: 'Líneas de Producto', sub: 'Mesa · Polvo · Chocolatina' },
            { num: '🇨🇴', label: 'Hecho en Colombia', sub: 'Con amor, desde Bogotá' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-montserrat font-black text-3xl lg:text-4xl text-beige mb-1">{stat.num}</div>
              <div className="font-montserrat font-bold text-sm text-cream uppercase tracking-wider">{stat.label}</div>
              <div className="text-cream/50 text-xs mt-1">{stat.sub}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
