import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, ChevronDown, ShoppingBag } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
  { label: 'Inicio', href: '/' },
  {
    label: 'Productos',
    href: '/productos',
    children: [
      { label: 'Chocolate de Mesa', href: '/productos/chocolate-de-mesa' },
      { label: 'Cacao en Polvo', href: '/productos/cacao-en-polvo' },
      { label: 'Chocolatina Artesanal', href: '/productos/chocolatina' },
    ],
  },
  {
    label: 'Líneas',
    href: '/lineas',
    children: [
      { label: '🌿 Línea Salud', href: '/lineas/salud' },
      { label: '💪 Línea Proteína Gym', href: '/lineas/gym' },
      { label: '🧒 Línea Niños', href: '/lineas/ninos' },
    ],
  },
  { label: 'Quiénes Somos', href: '/quienes-somos' },
  { label: 'Contacto', href: '/#contacto' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState(null)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
    setOpenDropdown(null)
  }, [location])

  const isHome = location.pathname === '/'
  const isDark = !scrolled && isHome

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-cream/95 backdrop-blur-md shadow-cacao py-2'
            : isHome
            ? 'bg-transparent py-4'
            : 'bg-cream/95 backdrop-blur-md shadow-cacao py-2'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">

            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 flex-shrink-0">
              <img
                src="/logos/logo.png"
                alt="Casa Opón"
                className={`transition-all duration-500 ${
                  scrolled ? 'h-10' : isHome ? 'h-14' : 'h-10'
                }`}
              />
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <div key={link.label} className="relative group">
                  {link.children ? (
                    <>
                      <button
                        className={`nav-link flex items-center gap-1 px-3 py-2 rounded-lg
                          hover:bg-cacao-700/10 transition-colors
                          ${isDark ? 'text-cream hover:text-cream' : 'text-cacao-800 hover:text-cacao-700'}
                          ${location.pathname.startsWith(link.href) ? 'text-cacao-700' : ''}`}
                        onMouseEnter={() => setOpenDropdown(link.label)}
                        onMouseLeave={() => setOpenDropdown(null)}
                      >
                        {link.label}
                        <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-200" />
                      </button>
                      <AnimatePresence>
                        {openDropdown === link.label && (
                          <motion.div
                            initial={{ opacity: 0, y: -8, scale: 0.97 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: -8, scale: 0.97 }}
                            transition={{ duration: 0.18 }}
                            className="absolute top-full left-0 mt-1 w-52 bg-cream rounded-2xl shadow-cacao-lg border border-cacao-200 overflow-hidden py-2"
                            onMouseEnter={() => setOpenDropdown(link.label)}
                            onMouseLeave={() => setOpenDropdown(null)}
                          >
                            {link.children.map((child) => (
                              <Link
                                key={child.href}
                                to={child.href}
                                className="flex items-center gap-2 px-4 py-2.5 text-sm font-semibold text-cacao-700
                                  hover:bg-cacao-100 hover:text-cacao-900 transition-colors"
                              >
                                {child.label}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <Link
                      to={link.href}
                      className={`nav-link px-3 py-2 rounded-lg hover:bg-cacao-700/10 transition-colors block
                        ${isDark ? 'text-cream hover:text-cream' : 'text-cacao-800 hover:text-cacao-700'}
                        ${location.pathname === link.href ? 'text-cacao-700' : ''}`}
                    >
                      {link.label}
                    </Link>
                  )}
                </div>
              ))}
            </nav>

            {/* CTA Desktop */}
            <div className="hidden lg:flex items-center gap-3">
              {/* Cacao separator ornament */}
              <span className={`text-lg opacity-40 ${isDark ? 'text-cream' : 'text-cacao-400'}`}>✦</span>
              <a
                href="https://wa.me/573000000000?text=Hola%20Casa%20Op%C3%B3n%2C%20quiero%20hacer%20un%20pedido"
                target="_blank"
                rel="noreferrer"
                className="btn-primary text-xs py-2.5 px-5"
              >
                <ShoppingBag size={15} />
                Pedir Ahora
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className={`lg:hidden p-2 rounded-xl transition-colors
                ${isDark ? 'text-cream hover:bg-white/10' : 'text-cacao-800 hover:bg-cacao-100'}`}
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <div className="absolute inset-0 bg-cacao-900/60 backdrop-blur-sm" onClick={() => setMobileOpen(false)} />
            <div className="absolute right-0 top-0 bottom-0 w-72 bg-cream shadow-2xl flex flex-col">
              {/* Mobile header */}
              <div className="flex items-center justify-between p-5 border-b border-cacao-200">
                <img src="/logos/logo.png" alt="Casa Opón" className="h-10" />
                <button onClick={() => setMobileOpen(false)} className="text-cacao-700 hover:text-cacao-900">
                  <X size={24} />
                </button>
              </div>

              {/* Mobile links */}
              <nav className="flex-1 overflow-y-auto p-5 space-y-1">
                {navLinks.map((link, i) => (
                  <div key={link.label}>
                    {link.children ? (
                      <>
                        <button
                          onClick={() => setOpenDropdown(openDropdown === link.label ? null : link.label)}
                          className="w-full flex items-center justify-between px-4 py-3 rounded-xl
                            font-montserrat font-semibold text-sm uppercase tracking-wider text-cacao-800
                            hover:bg-cacao-100 transition-colors"
                        >
                          {link.label}
                          <ChevronDown
                            size={16}
                            className={`transition-transform duration-200 ${openDropdown === link.label ? 'rotate-180' : ''}`}
                          />
                        </button>
                        <AnimatePresence>
                          {openDropdown === link.label && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              className="overflow-hidden pl-4"
                            >
                              {link.children.map((child) => (
                                <Link
                                  key={child.href}
                                  to={child.href}
                                  className="block px-4 py-2.5 text-sm font-semibold text-cacao-600
                                    hover:text-cacao-900 hover:bg-cacao-100 rounded-xl transition-colors"
                                >
                                  {child.label}
                                </Link>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </>
                    ) : (
                      <Link
                        to={link.href}
                        className="block px-4 py-3 rounded-xl font-montserrat font-semibold text-sm uppercase
                          tracking-wider text-cacao-800 hover:bg-cacao-100 hover:text-cacao-900 transition-colors"
                      >
                        {link.label}
                      </Link>
                    )}
                  </div>
                ))}
              </nav>

              {/* Mobile CTA */}
              <div className="p-5 border-t border-cacao-200 space-y-3">
                <a
                  href="https://wa.me/573000000000?text=Hola%20Casa%20Op%C3%B3n%2C%20quiero%20hacer%20un%20pedido"
                  target="_blank"
                  rel="noreferrer"
                  className="btn-primary w-full justify-center"
                >
                  <ShoppingBag size={16} />
                  Pedir por WhatsApp
                </a>
                <div className="flex justify-center gap-4 pt-2">
                  <a href="https://instagram.com/casaopon.chocolate" target="_blank" rel="noreferrer"
                    className="text-cacao-600 hover:text-cacao-800 transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </a>
                  <a href="https://facebook.com/casaopon" target="_blank" rel="noreferrer"
                    className="text-cacao-600 hover:text-cacao-800 transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </a>
                  <a href="https://tiktok.com/@casaopon.chocolate" target="_blank" rel="noreferrer"
                    className="text-cacao-600 hover:text-cacao-800 transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
