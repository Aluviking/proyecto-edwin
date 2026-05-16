import { motion } from 'framer-motion'
import { ArrowRight, Star, Leaf } from 'lucide-react'
import { Link } from 'react-router-dom'

const products = [
  {
    id: 'chocolate-de-mesa',
    name: 'Chocolate de Mesa',
    subtitle: 'Tradicional',
    description: 'Sabor auténtico y equilibrado, ideal para compartir en familia. Elaborado con cacao santandereano de nuestra finca familiar.',
    weight: '500g',
    ingredients: 'Cacao, azúcar y canela',
    icons: ['☕', '🍵'],
    tags: ['Tradición Familiar', 'Sin Sabores Artificiales'],
    color: 'from-cacao-800 to-cacao-700',
    light: 'bg-cacao-50',
    badge: 'Más Popular',
    href: '/productos/chocolate-de-mesa',
  },
  {
    id: 'cacao-en-polvo',
    name: 'Cacao en Polvo',
    subtitle: 'Premium',
    description: 'Puro cacao en polvo sin azúcar, ideal para repostería, bebidas calientes, batidos y recetas saludables.',
    weight: '250g / 500g',
    ingredients: '100% cacao puro',
    icons: ['🌿', '💚'],
    tags: ['Sin Azúcar', 'Alta Pureza', 'Versátil'],
    color: 'from-leaf-700 to-leaf-600',
    light: 'bg-leaf-50',
    badge: 'Orgánico',
    href: '/productos/cacao-en-polvo',
  },
  {
    id: 'chocolatina',
    name: 'Chocolatina Artesanal',
    subtitle: 'De Origen',
    description: 'Una barra de chocolate artesanal elaborada a mano. Cada pieza preserva el sabor auténtico del cacao colombiano.',
    weight: '50g / 100g',
    ingredients: 'Cacao, azúcar de caña',
    icons: ['🍫', '✨'],
    tags: ['Hecho a Mano', 'Sin Conservantes', 'Gourmet'],
    color: 'from-cacao-700 to-cacao-600',
    light: 'bg-cacao-50',
    badge: 'Artesanal',
    href: '/productos/chocolatina',
  },
]

export default function ProductsSection() {
  return (
    <section className="py-20 lg:py-28 px-4 bg-cream" id="productos">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="badge mb-4">Nuestros Productos</span>
          <h2 className="section-title">Del cacao a tu mesa,<br />
            <span className="font-playfair italic text-cacao-600 font-normal">con amor y tradición</span>
          </h2>
          <p className="mt-4 text-cacao-600 max-w-2xl mx-auto leading-relaxed">
            Transformamos el cacao santandereano de nuestra finca familiar en productos artesanales
            que llevan el sabor auténtico de Colombia directamente a tu hogar.
          </p>
        </motion.div>

        {/* Product cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {products.map((product, i) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className="group relative bg-white rounded-3xl overflow-hidden shadow-cacao card-hover border border-cacao-100"
            >
              {/* Badge */}
              <div className="absolute top-4 left-4 z-10">
                <span className="badge text-xs">{product.badge}</span>
              </div>

              {/* Visual top */}
              <div className={`bg-gradient-to-br ${product.color} h-52 flex items-center justify-center relative overflow-hidden`}>
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-4 right-4 w-24 h-24 border border-white/30 rounded-full" />
                  <div className="absolute bottom-4 left-4 w-16 h-16 border border-white/20 rounded-full" />
                </div>
                <div className="text-7xl select-none drop-shadow-lg">
                  {product.icons[0]}
                </div>
                <div className="absolute bottom-4 right-6 text-5xl opacity-30 select-none">
                  {product.icons[1]}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="mb-4">
                  <h3 className="font-montserrat font-black text-xl text-cacao-800">{product.name}</h3>
                  <p className="font-playfair italic text-cacao-500 text-sm">{product.subtitle}</p>
                </div>

                <p className="text-cacao-700 text-sm leading-relaxed mb-4">{product.description}</p>

                {/* Details */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {product.tags.map((tag) => (
                    <span key={tag} className="flex items-center gap-1 bg-cacao-50 text-cacao-600
                      text-xs font-semibold px-2.5 py-1 rounded-full border border-cacao-100">
                      <Leaf size={9} />
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between mb-5 text-xs text-cacao-500">
                  <span><strong className="text-cacao-700">Peso:</strong> {product.weight}</span>
                  <span><strong className="text-cacao-700">Ingredientes:</strong> {product.ingredients}</span>
                </div>

                {/* CTA */}
                <Link
                  to={product.href}
                  className="btn-primary w-full justify-center text-xs py-2.5"
                >
                  Ver Producto
                  <ArrowRight size={14} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-12"
        >
          <Link to="/productos" className="btn-secondary">
            Ver Todos los Productos
            <ArrowRight size={16} />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
