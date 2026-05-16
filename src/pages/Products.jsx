import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Leaf, Star } from 'lucide-react'

const products = [
  {
    id: 'chocolate-de-mesa',
    name: 'Chocolate de Mesa Tradicional',
    subtitle: 'Nuestra estrella',
    description: 'Sabor auténtico y equilibrado, ideal para compartir en familia. Elaborado con cacao santandereano seleccionado, azúcar de caña y canela. Una taza de tradición en cada sorbo.',
    weight: '500g',
    ingredients: 'Cacao, azúcar y canela',
    servings: 'Aprox. 25 porciones',
    preparation: 'Disolver 2 cucharadas (20g) en 200ml de leche o agua caliente',
    icons: ['☕', '🍵'],
    tags: ['Tradición Familiar', 'Sin Sabores Artificiales', 'Cacao Santandereano', 'Hecho Artesanalmente'],
    color: 'from-cacao-800 to-cacao-700',
    badge: 'Más Popular',
    href: '/productos/chocolate-de-mesa',
    img: 'https://images.unsplash.com/photo-1481391243133-f96216dcb5d2?w=800&q=80',
  },
  {
    id: 'cacao-en-polvo',
    name: 'Cacao en Polvo Premium',
    subtitle: 'Pureza total',
    description: 'Cacao en polvo 100% puro sin azúcar añadida. Ideal para repostería, batidos saludables, bebidas calientes y cualquier receta que requiera el auténtico sabor del cacao colombiano.',
    weight: '250g / 500g',
    ingredients: '100% cacao puro',
    servings: 'Según receta',
    preparation: 'Añadir según la receta o gustos. Ideal en batidos, postres y bebidas.',
    icons: ['🌿', '💚'],
    tags: ['Sin Azúcar', 'Alta Pureza', 'Versátil', '100% Orgánico'],
    color: 'from-leaf-700 to-leaf-600',
    badge: 'Orgánico',
    href: '/productos/cacao-en-polvo',
    img: 'https://images.unsplash.com/photo-1548907040-4baa42d10919?w=800&q=80',
  },
  {
    id: 'chocolatina',
    name: 'Chocolatina Artesanal',
    subtitle: 'De origen',
    description: 'Una barra de chocolate artesanal elaborada a mano, mordisco a mordisco. Cada pieza preserva el sabor auténtico y puro del cacao colombiano. Sin prisa, con tradición.',
    weight: '50g / 100g',
    ingredients: 'Cacao, azúcar de caña',
    servings: '1-2 porciones',
    preparation: 'Lista para disfrutar. Conservar en lugar fresco y seco.',
    icons: ['🍫', '✨'],
    tags: ['Hecho a Mano', 'Sin Conservantes', 'Gourmet', 'De Origen'],
    color: 'from-cacao-700 to-cacao-600',
    badge: 'Artesanal',
    href: '/productos/chocolatina',
    img: 'https://images.unsplash.com/photo-1606312619070-d48b4c652a52?w=800&q=80',
  },
]

export default function Products() {
  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="bg-gradient-to-br from-cacao-900 to-cacao-700 py-20 px-4 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-10 w-48 h-48 border-2 border-beige rounded-full" />
        </div>
        <div className="max-w-3xl mx-auto relative">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <span className="badge bg-cacao-700/50 border-cacao-600 text-beige mb-4 inline-block">Catálogo</span>
            <h1 className="font-montserrat font-black text-4xl md:text-6xl text-cream mb-4">
              Nuestros Productos
            </h1>
            <p className="font-playfair italic text-beige text-xl">
              "De finca familiar a tu hogar"
            </p>
          </motion.div>
        </div>
      </section>

      {/* Products */}
      <section className="py-20 px-4 bg-cream">
        <div className="max-w-7xl mx-auto space-y-20">
          {products.map((product, i) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center ${
                i % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Image */}
              <div className={i % 2 === 1 ? 'lg:order-2' : ''}>
                <div className="relative rounded-3xl overflow-hidden shadow-cacao-lg">
                  <img src={product.img} alt={product.name} className="w-full h-80 lg:h-[450px] object-cover" />
                  <div className={`absolute top-4 left-4 bg-gradient-to-r ${product.color} text-cream
                    text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full`}>
                    {product.badge}
                  </div>
                  <div className="absolute bottom-4 right-4 text-5xl">{product.icons[0]}</div>
                </div>
              </div>

              {/* Content */}
              <div className={i % 2 === 1 ? 'lg:order-1' : ''}>
                <span className="badge mb-4">{product.subtitle}</span>
                <h2 className="section-title mb-4">{product.name}</h2>
                <p className="text-cacao-700 leading-relaxed mb-6">{product.description}</p>

                {/* Details grid */}
                <div className="grid grid-cols-2 gap-3 mb-6">
                  {[
                    { label: 'Peso', value: product.weight },
                    { label: 'Porciones', value: product.servings },
                    { label: 'Ingredientes', value: product.ingredients },
                  ].map((d) => (
                    <div key={d.label} className="bg-cacao-50 rounded-2xl p-4 border border-cacao-100">
                      <p className="text-xs font-bold text-cacao-500 uppercase tracking-wider mb-1">{d.label}</p>
                      <p className="text-cacao-800 font-semibold text-sm">{d.value}</p>
                    </div>
                  ))}
                  <div className="bg-leaf-50 rounded-2xl p-4 border border-leaf-100">
                    <p className="text-xs font-bold text-leaf-600 uppercase tracking-wider mb-1">Preparación</p>
                    <p className="text-cacao-800 font-semibold text-xs leading-relaxed">{product.preparation}</p>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-7">
                  {product.tags.map((tag) => (
                    <span key={tag} className="flex items-center gap-1 bg-white text-cacao-600 text-xs font-semibold
                      px-3 py-1.5 rounded-full border border-cacao-200">
                      <Leaf size={9} />
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap gap-3">
                  <a
                    href="https://wa.me/573000000000?text=Hola%20Casa%20Op%C3%B3n%2C%20quiero%20pedir%20este%20producto"
                    target="_blank"
                    rel="noreferrer"
                    className="btn-primary"
                  >
                    Pedir por WhatsApp
                    <ArrowRight size={16} />
                  </a>
                  <Link to={product.href} className="btn-secondary">
                    Ver Detalles
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  )
}
