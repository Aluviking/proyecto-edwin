import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, ArrowLeft, Leaf, Check } from 'lucide-react'

const services = {
  'chocolate-de-mesa': {
    name: 'Chocolate de Mesa',
    subtitle: 'Tradicional · Para toda la familia',
    description: 'El chocolate de mesa artesanal de Casa Opón es nuestra propuesta más tradicional. Elaborado con cacao santandereano seleccionado, azúcar de caña y canela, siguiendo una receta familiar que preserva el sabor auténtico de Colombia.',
    longDesc: 'Cada tableta de 500g está diseñada para preparar en promedio 25 tazas de chocolate de mesa. La proporción ideal es disolver 2 cucharadas (20g) en 200ml de leche o agua caliente y revolver hasta obtener la consistencia deseada. Puedes endulzar al gusto y añadir especias según tu preferencia.',
    benefits: [
      'Cacao 100% santandereano de finca familiar',
      'Sin saborizantes artificiales',
      'Sin conservantes ni químicos',
      'Receta tradicional de origen colombiano',
      'Ideal para compartir en familia',
      'Hecho artesanalmente en pequeños lotes',
    ],
    ingredients: 'Cacao, azúcar y canela',
    weight: '500g (aprox. 25 porciones)',
    color: 'from-cacao-800 to-cacao-700',
    bg: 'bg-cacao-50',
    emoji: '☕',
    img: 'https://images.unsplash.com/photo-1481391243133-f96216dcb5d2?w=800&q=80',
    price: 'Consultar por WhatsApp',
  },
  'cacao-en-polvo': {
    name: 'Cacao en Polvo',
    subtitle: 'Premium · Sin azúcar añadida',
    description: 'Nuestro cacao en polvo es 100% puro, sin azúcar añadida y sin ningún tipo de aditivo. Es el cacao en su forma más pura, ideal para repostería artesanal, batidos saludables, bebidas calientes y cualquier receta que quiera el auténtico sabor del cacao colombiano.',
    longDesc: 'La versatilidad del cacao en polvo de Casa Opón lo hace perfecto para múltiples usos: añade a tus batidos de proteína, úsalo en repostería saludable, prepara bebidas calientes o frías, o simplemente disfrútalo como suplemento de bienestar. Rico en antioxidantes, flavonoides y magnesio natural.',
    benefits: [
      '100% puro, sin azúcar añadida',
      'Rico en antioxidantes y flavonoides',
      'Fuente natural de magnesio y hierro',
      'Ideal para recetas saludables',
      'Sin gluten (verificar alergias)',
      'Perfecto para dietas fitness y keto',
    ],
    ingredients: '100% cacao puro',
    weight: '250g / 500g',
    color: 'from-leaf-700 to-leaf-600',
    bg: 'bg-leaf-50',
    emoji: '🌿',
    img: 'https://images.unsplash.com/photo-1548907040-4baa42d10919?w=800&q=80',
    price: 'Consultar por WhatsApp',
  },
  'chocolatina': {
    name: 'Chocolatina Artesanal',
    subtitle: 'De origen · Hecha a mano',
    description: 'Nuestra chocolatina artesanal es una barra de chocolate elaborada a mano, en pequeños lotes, preservando el sabor auténtico del cacao colombiano en cada mordisco. Una experiencia gourmet que nace de la tradición.',
    longDesc: 'Cada barra es trabajada individualmente por nuestros artesanos, garantizando una textura y sabor únicos en cada pieza. El cacao santandereano que utilizamos es seleccionado grano a grano, lo que se traduce en un chocolate con notas terrosas, frutales y un amargor equilibrado que sorprenderá a cualquier amante del chocolate real.',
    benefits: [
      'Elaborada a mano, en pequeños lotes',
      'Cacao santandereano seleccionado',
      'Sin conservantes ni colorantes',
      'Sabor gourmet de origen colombiano',
      'Textura y notas únicas en cada barra',
      'Empaque biodegradable estilo kraft',
    ],
    ingredients: 'Cacao, azúcar de caña',
    weight: '50g / 100g',
    color: 'from-cacao-700 to-cacao-600',
    bg: 'bg-cacao-50',
    emoji: '🍫',
    img: 'https://images.unsplash.com/photo-1606312619070-d48b4c652a52?w=800&q=80',
    price: 'Consultar por WhatsApp',
  },
}

export default function ServiceDetail() {
  const { slug } = useParams()
  const service = services[slug]

  if (!service) {
    return (
      <main className="pt-32 px-4 text-center min-h-screen">
        <h1 className="text-3xl font-bold text-cacao-800 mb-4">Producto no encontrado</h1>
        <Link to="/productos" className="btn-primary">Volver a Productos</Link>
      </main>
    )
  }

  return (
    <main className="pt-20">
      {/* Hero */}
      <section className={`bg-gradient-to-br ${service.color} py-20 px-4 relative overflow-hidden`}>
        <div className="absolute top-6 right-6 text-8xl opacity-20 select-none">{service.emoji}</div>
        <div className="max-w-4xl mx-auto relative">
          <Link to="/productos" className="inline-flex items-center gap-2 text-cream/70 hover:text-cream
            text-sm font-semibold mb-8 transition-colors">
            <ArrowLeft size={16} />
            Volver a Productos
          </Link>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <span className="inline-block bg-cream/20 text-cream text-xs font-semibold uppercase
              tracking-widest px-4 py-2 rounded-full border border-cream/30 mb-4">
              {service.subtitle}
            </span>
            <h1 className="font-montserrat font-black text-4xl md:text-6xl text-cream mb-4">{service.name}</h1>
            <p className="text-cream/80 text-lg max-w-2xl leading-relaxed">{service.description}</p>
          </motion.div>
        </div>
      </section>

      {/* Detail */}
      <section className={`py-20 px-4 ${service.bg}`}>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="rounded-3xl overflow-hidden shadow-cacao-lg">
                <img src={service.img} alt={service.name} className="w-full h-[450px] object-cover" />
              </div>
              {/* Info cards */}
              <div className="grid grid-cols-2 gap-4 mt-5">
                <div className="bg-white rounded-2xl p-4 border border-cacao-100">
                  <p className="text-xs font-bold text-cacao-500 uppercase mb-1">Peso</p>
                  <p className="font-bold text-cacao-800">{service.weight}</p>
                </div>
                <div className="bg-white rounded-2xl p-4 border border-cacao-100">
                  <p className="text-xs font-bold text-cacao-500 uppercase mb-1">Ingredientes</p>
                  <p className="font-bold text-cacao-800 text-sm">{service.ingredients}</p>
                </div>
              </div>
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="section-title mb-6">¿Por qué elegir<br />
                <span className="font-playfair italic text-cacao-600 font-normal">este producto?</span>
              </h2>
              <p className="text-cacao-700 leading-relaxed mb-8">{service.longDesc}</p>

              {/* Benefits */}
              <div className="space-y-3 mb-8">
                {service.benefits.map((b) => (
                  <div key={b} className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-leaf-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Check size={13} className="text-leaf-600" />
                    </div>
                    <span className="text-cacao-700 text-sm">{b}</span>
                  </div>
                ))}
              </div>

              {/* Trust badges */}
              <div className="flex flex-wrap gap-2 mb-8">
                {['🌿 100% Natural', '🍫 Sin Aditivos', '🏡 Finca Familiar', '🇨🇴 Hecho en Colombia'].map((b) => (
                  <span key={b} className="bg-cacao-100 text-cacao-700 text-xs font-semibold px-3 py-1.5 rounded-full border border-cacao-200">
                    {b}
                  </span>
                ))}
              </div>

              {/* CTA */}
              <div className="bg-white rounded-2xl p-6 border border-cacao-100 shadow-cacao">
                <p className="font-montserrat font-bold text-cacao-800 mb-1">¿Quieres hacer un pedido?</p>
                <p className="text-cacao-600 text-sm mb-4">
                  Escríbenos por WhatsApp y te atendemos inmediatamente con precios y disponibilidad.
                </p>
                <a
                  href={`https://wa.me/573000000000?text=Hola%20Casa%20Op%C3%B3n%2C%20me%20interesa%20el%20${encodeURIComponent(service.name)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-primary w-full justify-center"
                >
                  Pedir por WhatsApp
                  <ArrowRight size={16} />
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  )
}
