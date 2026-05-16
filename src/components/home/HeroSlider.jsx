import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, EffectFade } from 'swiper/modules'
import { motion } from 'framer-motion'
import { ArrowRight, Leaf, Star } from 'lucide-react'
import { Link } from 'react-router-dom'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/effect-fade'

const slides = [
  {
    id: 1,
    badge: 'Desde Santa Rita del Opón, Santander',
    title: 'Chocolate de Mesa',
    subtitle: 'Tradicional',
    description: 'Sabor auténtico y equilibrado, ideal para compartir en familia. De nuestra finca directamente a tu taza.',
    cta: 'Descubrir Producto',
    ctaLink: '/productos/chocolate-de-mesa',
    bg: 'from-cacao-900 via-cacao-800 to-cacao-700',
    accent: '#D8C3A5',
    icon: '☕',
    tags: ['100% Natural', 'Sin Aditivos', 'Finca Familiar'],
  },
  {
    id: 2,
    badge: 'Cacao Puro de Origen',
    title: 'Cacao en Polvo',
    subtitle: 'Premium',
    description: 'Toda la pureza del cacao santandereano en polvo fino. Perfecto para recetas, batidos y momentos de bienestar.',
    cta: 'Ver Detalles',
    ctaLink: '/productos/cacao-en-polvo',
    bg: 'from-leaf-800 via-leaf-700 to-cacao-700',
    accent: '#F4EBDD',
    icon: '🌱',
    tags: ['Sin Azúcar', 'Alto en Proteína', 'Orgánico'],
  },
  {
    id: 3,
    badge: 'Artesanal · Hecho en Bogotá',
    title: 'Chocolatina',
    subtitle: 'Artesanal',
    description: 'Una barra de chocolate artesanal que preserva el sabor auténtico del cacao colombiano. Tradición en cada mordisco.',
    cta: 'Conocer Más',
    ctaLink: '/productos/chocolatina',
    bg: 'from-cacao-800 via-cacao-700 to-cacao-600',
    accent: '#F4EBDD',
    icon: '🍫',
    tags: ['Receta Familiar', 'Hecho a Mano', 'Sin Conservantes'],
  },
  {
    id: 4,
    badge: 'Línea de Bienestar',
    title: 'Proteína de Cacao',
    subtitle: 'Para Gyms',
    description: 'La fuerza del cacao santandereano en tu rutina fitness. Alto en proteína, sin azúcares añadidos. Potencia natural.',
    cta: 'Explorar Línea',
    ctaLink: '/lineas/gym',
    bg: 'from-cacao-900 via-leaf-800 to-leaf-600',
    accent: '#D8C3A5',
    icon: '💪',
    tags: ['Alta Proteína', 'Sin Azúcar', 'Energía Natural'],
  },
]

export default function HeroSlider() {
  return (
    <section className="relative w-full pt-16 sm:pt-20 lg:pt-24 px-3 sm:px-4 lg:px-8">
      <Swiper
        modules={[Autoplay, Pagination, EffectFade]}
        effect="fade"
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        pagination={{ clickable: true, dynamicBullets: false }}
        loop={true}
        className="w-full rounded-3xl lg:rounded-5xl overflow-hidden"
        style={{ '--swiper-pagination-bottom': '24px' }}
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className={`relative bg-gradient-to-br ${slide.bg} min-h-[85vh] sm:min-h-[90vh] lg:min-h-[88vh] flex items-center`}>
              {/* Background pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0" style={{
                  backgroundImage: `radial-gradient(circle at 20% 50%, ${slide.accent}30 0%, transparent 50%),
                                    radial-gradient(circle at 80% 20%, ${slide.accent}20 0%, transparent 40%)`
                }} />
                {/* Decorative cacao shapes */}
                <div className="absolute top-10 right-10 w-32 h-32 border-2 border-white/20 rounded-full" />
                <div className="absolute bottom-20 left-20 w-20 h-20 border border-white/10 rounded-full" />
                <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-white/20 rounded-full" />
                <div className="absolute bottom-1/3 left-1/4 w-2 h-2 bg-white/30 rounded-full" />
              </div>

              {/* Sello decorativo */}
              <div className="absolute top-6 right-6 sm:top-10 sm:right-10 opacity-15 hidden sm:block">
                <img src="/logos/sello.png" alt="" className="w-28 h-28 lg:w-36 lg:h-36 animate-float" />
              </div>

              {/* Content */}
              <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-16 w-full">
                <div className="max-w-2xl">
                  {/* Badge */}
                  <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm text-white/90
                    text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-6 border border-white/20">
                    <Leaf size={12} />
                    {slide.badge}
                  </div>

                  {/* Title */}
                  <h1 className="font-montserrat font-black text-4xl sm:text-5xl lg:text-7xl text-white leading-none mb-2">
                    {slide.title}
                  </h1>
                  <p className="font-playfair italic text-2xl sm:text-3xl lg:text-4xl mb-6"
                    style={{ color: slide.accent }}>
                    {slide.subtitle}
                  </p>

                  {/* Description */}
                  <p className="text-white/80 text-base sm:text-lg leading-relaxed mb-8 max-w-lg font-montserrat">
                    {slide.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-10">
                    {slide.tags.map((tag) => (
                      <span key={tag} className="flex items-center gap-1 bg-white/10 backdrop-blur-sm
                        text-white/90 text-xs font-semibold px-3 py-1.5 rounded-full border border-white/20">
                        <Star size={10} fill="currentColor" />
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* CTAs */}
                  <div className="flex flex-wrap gap-3">
                    <Link
                      to={slide.ctaLink}
                      className="btn-primary bg-cream text-cacao-800 hover:bg-white shadow-lg"
                    >
                      {slide.cta}
                      <ArrowRight size={16} />
                    </Link>
                    <a
                      href="https://wa.me/573000000000?text=Hola%2C%20quiero%20pedir%20productos%20de%20Casa%20Op%C3%B3n"
                      target="_blank"
                      rel="noreferrer"
                      className="btn-outline-white"
                    >
                      Pedir por WhatsApp
                    </a>
                  </div>
                </div>

                {/* Big emoji decoration */}
                <div className="absolute right-8 bottom-24 text-8xl sm:text-9xl opacity-20 hidden md:block select-none">
                  {slide.icon}
                </div>
              </div>

              {/* Bottom fade for pagination */}
              <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}
