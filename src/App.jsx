import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import WhatsAppButton from './components/ui/WhatsAppButton'
import ChatBot from './components/ui/ChatBot'

import Home from './pages/Home'
import About from './pages/About'
import Products from './pages/Products'
import ServiceDetail from './pages/ServiceDetail'
import Lines from './pages/Lines'
import PrivacyPolicy from './pages/PrivacyPolicy'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [pathname])
  return null
}

function AppLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-cream">
      <ScrollToTop />
      <Navbar />
      <div className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quienes-somos" element={<About />} />
          <Route path="/productos" element={<Products />} />
          <Route path="/productos/:slug" element={<ServiceDetail />} />
          <Route path="/lineas/:slug" element={<Lines />} />
          <Route path="/politicas-de-privacidad" element={<PrivacyPolicy />} />
          <Route path="/servicios/:slug" element={<ServiceDetail />} />
          <Route path="*" element={
            <div className="min-h-screen flex flex-col items-center justify-center px-4 text-center pt-20">
              <div className="text-8xl mb-6">🍫</div>
              <h1 className="font-montserrat font-black text-4xl text-cacao-800 mb-4">Página no encontrada</h1>
              <p className="text-cacao-600 mb-8">Esta página no existe, pero nuestro chocolate sí. ¡Vuelve al inicio!</p>
              <a href="/" className="btn-primary">Volver al Inicio</a>
            </div>
          } />
        </Routes>
      </div>
      <Footer />
      <WhatsAppButton />
      <ChatBot />
    </div>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <AppLayout />
    </BrowserRouter>
  )
}
