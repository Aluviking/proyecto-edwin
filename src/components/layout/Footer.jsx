import { Link } from 'react-router-dom'
import { MapPin, Phone, Mail } from 'lucide-react'

const products = [
  { label: 'Chocolate de Mesa', href: '/productos/chocolate-de-mesa' },
  { label: 'Cacao en Polvo', href: '/productos/cacao-en-polvo' },
  { label: 'Chocolatina Artesanal', href: '/productos/chocolatina' },
]

const lines = [
  { label: 'Línea Salud', href: '/lineas/salud' },
  { label: 'Línea Gym & Proteína', href: '/lineas/gym' },
  { label: 'Línea Niños', href: '/lineas/ninos' },
]

const company = [
  { label: 'Quiénes Somos', href: '/quienes-somos' },
  { label: 'Nuestra Finca', href: '/quienes-somos#finca' },
  { label: 'Galería', href: '/#galeria' },
  { label: 'Dónde Estamos', href: '/#donde-estamos' },
  { label: 'Política de Privacidad', href: '/politicas-de-privacidad' },
]

const socials = [
  {
    name: 'Instagram',
    href: 'https://instagram.com/casaopon.chocolate',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
      </svg>
    ),
  },
  {
    name: 'Facebook',
    href: 'https://facebook.com/casaopon',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
      </svg>
    ),
  },
  {
    name: 'TikTok',
    href: 'https://tiktok.com/@casaopon.chocolate',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
      </svg>
    ),
  },
  {
    name: 'WhatsApp',
    href: 'https://wa.me/573000000000',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
      </svg>
    ),
  },
]

export default function Footer() {
  return (
    <footer className="bg-cacao-900 text-cream">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand column */}
          <div className="lg:col-span-1">
            <img
              src="/logos/logo-negro.png"
              alt="Casa Opón"
              className="h-16 mb-5 filter brightness-0 invert opacity-90"
            />
            <p className="font-playfair italic text-beige/80 text-sm leading-relaxed mb-5">
              "Tradición que se siente, sabor que nos une."
            </p>
            <p className="text-cream/60 text-sm leading-relaxed mb-6">
              Chocolate artesanal de origen. De nuestra finca familiar en Santa Rita del Opón, Santander,
              directamente a tu hogar en Bogotá.
            </p>

            {/* Social links */}
            <div className="flex gap-3">
              {socials.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.name}
                  className="w-9 h-9 bg-cacao-700/50 hover:bg-cacao-600 rounded-xl flex items-center justify-center
                    text-cream/70 hover:text-cream transition-all duration-200"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-montserrat font-bold text-xs uppercase tracking-widest text-beige mb-5">
              Productos
            </h4>
            <ul className="space-y-3">
              {products.map((item) => (
                <li key={item.href}>
                  <Link to={item.href} className="text-cream/60 hover:text-cream text-sm transition-colors
                    flex items-center gap-2 group">
                    <span className="w-1 h-1 bg-beige rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                    {item.label}
                  </Link>
                </li>
              ))}
              <li className="pt-2 border-t border-cacao-700">
                <h5 className="font-montserrat font-bold text-xs uppercase tracking-wider text-beige/70 mb-3">Líneas</h5>
                {lines.map((item) => (
                  <Link key={item.href} to={item.href} className="block text-cream/60 hover:text-cream text-sm
                    transition-colors mb-2 flex items-center gap-2 group">
                    <span className="w-1 h-1 bg-beige rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                    {item.label}
                  </Link>
                ))}
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-montserrat font-bold text-xs uppercase tracking-widest text-beige mb-5">
              Empresa
            </h4>
            <ul className="space-y-3">
              {company.map((item) => (
                <li key={item.href}>
                  <Link to={item.href} className="text-cream/60 hover:text-cream text-sm transition-colors
                    flex items-center gap-2 group">
                    <span className="w-1 h-1 bg-beige rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-montserrat font-bold text-xs uppercase tracking-widest text-beige mb-5">
              Contacto
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-cream/60">
                <MapPin size={16} className="text-beige flex-shrink-0 mt-0.5" />
                <span>Bogotá, Colombia<br /><span className="text-cream/40 text-xs">Origen: Santa Rita del Opón, Santander</span></span>
              </li>
              <li>
                <a href="https://wa.me/573000000000" target="_blank" rel="noreferrer"
                  className="flex items-center gap-3 text-sm text-cream/60 hover:text-cream transition-colors">
                  <Phone size={16} className="text-beige flex-shrink-0" />
                  +57 300 000 0000
                </a>
              </li>
              <li>
                <a href="mailto:hola@casaopon.com"
                  className="flex items-center gap-3 text-sm text-cream/60 hover:text-cream transition-colors">
                  <Mail size={16} className="text-beige flex-shrink-0" />
                  hola@casaopon.com
                </a>
              </li>
            </ul>

            {/* Sello image */}
            <div className="mt-8">
              <img src="/logos/sello.png" alt="Casa Opón - Hecho en Colombia" className="w-24 h-24 opacity-50" />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-cacao-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5
          flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-cream/40 text-xs text-center sm:text-left">
            © {new Date().getFullYear()} Casa Opón. Todos los derechos reservados.
            Chocolate Artesanal de Origen · Bogotá, Colombia 🇨🇴
          </p>
          <div className="flex gap-4">
            <Link to="/politicas-de-privacidad" className="text-cream/40 hover:text-cream/70 text-xs transition-colors">
              Política de Privacidad
            </Link>
            <span className="text-cream/20">·</span>
            <span className="text-cream/40 text-xs">@casaopon.chocolate</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
