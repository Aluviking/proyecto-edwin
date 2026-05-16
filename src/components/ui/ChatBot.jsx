import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle, X, Send, Bot } from 'lucide-react'

const faqs = {
  'hola': '¡Hola! 👋 Soy el asistente virtual de Casa Opón. Puedo ayudarte con información sobre nuestros productos, pedidos y envíos. ¿En qué te puedo ayudar?',
  'productos': '🍫 Tenemos 3 productos estrella:\n\n1. **Chocolate de Mesa Tradicional** (500g) - Cacao, azúcar y canela\n2. **Cacao en Polvo Premium** (250g/500g) - 100% puro, sin azúcar\n3. **Chocolatina Artesanal** (50g/100g) - Hecha a mano\n\n¿Te interesa alguno en especial?',
  'precio': '💰 Nuestros precios varían según el producto y presentación. Para precios actualizados y pedidos, escríbenos directamente por WhatsApp y te atendemos de inmediato.',
  'envio': '🚚 Hacemos entregas a domicilio en Bogotá y enviamos a toda Colombia por Coordinadora. El tiempo de entrega en Bogotá es de 24-48 horas.',
  'organico': '🌿 ¡Sí! Todo nuestro cacao es 100% orgánico, sin pesticidas ni químicos. Viene directamente de nuestra finca familiar en Santa Rita del Opón, Santander.',
  'gym': '💪 Tenemos una Línea Gym especial con cacao en polvo de alto contenido proteico, sin azúcares añadidos. Perfecto para batidos post-entreno.',
  'niños': '🧒 Nuestra Línea Niños está formulada con bajo contenido de azúcar, sin colorantes ni saborizantes artificiales. ¡Aprobada por nutricionistas!',
  'donde': '📍 Estamos en Bogotá y hacemos envíos a toda Colombia. También puedes consultarnos por WhatsApp para confirmar cobertura en tu barrio.',
  'pedido': '🛒 Para hacer un pedido, lo más fácil es escribirnos por WhatsApp al botón que está en la página. Te atendemos de inmediato y coordinamos el envío.',
  'ingredientes': '✅ Nuestro Chocolate de Mesa lleva: cacao, azúcar y canela. El Cacao en Polvo es 100% puro. Todo sin conservantes, sin saborizantes artificiales.',
}

function getBotResponse(msg) {
  const lower = msg.toLowerCase()
  if (lower.includes('hola') || lower.includes('buenas') || lower.includes('buenos')) return faqs.hola
  if (lower.includes('product') || lower.includes('venden') || lower.includes('tienen')) return faqs.productos
  if (lower.includes('precio') || lower.includes('costo') || lower.includes('valor') || lower.includes('cuánto')) return faqs.precio
  if (lower.includes('envio') || lower.includes('envío') || lower.includes('domicilio') || lower.includes('entrega')) return faqs.envio
  if (lower.includes('orgánic') || lower.includes('natural') || lower.includes('aditivo') || lower.includes('químico')) return faqs.organico
  if (lower.includes('gym') || lower.includes('proteín') || lower.includes('entren') || lower.includes('deporte')) return faqs.gym
  if (lower.includes('niño') || lower.includes('niñ') || lower.includes('hijo') || lower.includes('azúcar')) return faqs.niños
  if (lower.includes('donde') || lower.includes('dónde') || lower.includes('barrio') || lower.includes('cerca')) return faqs.donde
  if (lower.includes('pedido') || lower.includes('comprar') || lower.includes('pedir') || lower.includes('quiero')) return faqs.pedido
  if (lower.includes('ingredient') || lower.includes('que lleva') || lower.includes('contiene')) return faqs.ingredientes
  return '🤔 No estoy seguro de esa pregunta. Te recomiendo escribirnos directamente por **WhatsApp** para una respuesta más completa. ¡Estamos ahí para ayudarte! 🍫'
}

const suggestions = ['¿Qué productos tienen?', '¿Hacen envíos?', '¿Es orgánico?', '¿Cómo pido?']

export default function ChatBot() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState([
    { from: 'bot', text: '¡Hola! 👋 Soy el asistente de **Casa Opón**. ¿Cómo puedo ayudarte hoy?' }
  ])
  const [input, setInput] = useState('')
  const [typing, setTyping] = useState(false)
  const bottomRef = useRef(null)

  useEffect(() => {
    if (open) bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, open])

  const send = (text) => {
    const msg = text || input.trim()
    if (!msg) return
    setInput('')
    setMessages(prev => [...prev, { from: 'user', text: msg }])
    setTyping(true)
    setTimeout(() => {
      setTyping(false)
      setMessages(prev => [...prev, { from: 'bot', text: getBotResponse(msg) }])
    }, 900 + Math.random() * 400)
  }

  const formatText = (text) => {
    return text
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      .replace(/\n/g, '<br/>')
  }

  return (
    <div className="fixed bottom-24 right-6 z-50">
      {/* Chat window */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20, transformOrigin: 'bottom right' }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="mb-4 w-80 sm:w-96 bg-white rounded-3xl shadow-cacao-lg border border-cacao-100 overflow-hidden"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-cacao-800 to-cacao-700 px-5 py-4 flex items-center gap-3">
              <div className="relative">
                <img src="/logos/isotipo.png" alt="Casa Opón" className="w-10 h-10 rounded-full bg-cream/20 p-1" />
                <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-green-400 rounded-full border-2 border-cacao-800" />
              </div>
              <div className="flex-1">
                <p className="text-cream font-bold text-sm font-montserrat">Casa Opón</p>
                <p className="text-cream/60 text-xs">Asistente virtual · En línea</p>
              </div>
              <button onClick={() => setOpen(false)} className="text-cream/60 hover:text-cream transition-colors">
                <X size={18} />
              </button>
            </div>

            {/* Messages */}
            <div className="h-72 overflow-y-auto p-4 space-y-3 bg-cacao-50/30">
              {messages.map((msg, i) => (
                <div key={i} className={`flex ${msg.from === 'user' ? 'justify-end' : 'justify-start'} chat-bubble-in`}>
                  {msg.from === 'bot' && (
                    <div className="w-7 h-7 bg-cacao-700 rounded-full flex items-center justify-center flex-shrink-0 mt-1 mr-2">
                      <Bot size={14} className="text-cream" />
                    </div>
                  )}
                  <div
                    className={`max-w-[80%] px-4 py-2.5 rounded-2xl text-sm leading-relaxed ${
                      msg.from === 'user'
                        ? 'bg-cacao-700 text-cream rounded-br-sm'
                        : 'bg-white text-cacao-800 rounded-bl-sm shadow-sm border border-cacao-100'
                    }`}
                    dangerouslySetInnerHTML={{ __html: formatText(msg.text) }}
                  />
                </div>
              ))}
              {typing && (
                <div className="flex justify-start chat-bubble-in">
                  <div className="w-7 h-7 bg-cacao-700 rounded-full flex items-center justify-center flex-shrink-0 mt-1 mr-2">
                    <Bot size={14} className="text-cream" />
                  </div>
                  <div className="bg-white rounded-2xl rounded-bl-sm px-4 py-3 shadow-sm border border-cacao-100">
                    <div className="flex gap-1">
                      <div className="w-2 h-2 bg-cacao-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                      <div className="w-2 h-2 bg-cacao-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                      <div className="w-2 h-2 bg-cacao-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                    </div>
                  </div>
                </div>
              )}
              <div ref={bottomRef} />
            </div>

            {/* Suggestions */}
            {messages.length < 2 && (
              <div className="px-4 py-2 border-t border-cacao-100">
                <div className="flex flex-wrap gap-2">
                  {suggestions.map((s) => (
                    <button
                      key={s}
                      onClick={() => send(s)}
                      className="text-xs bg-cacao-50 border border-cacao-200 text-cacao-700 font-semibold
                        px-3 py-1.5 rounded-full hover:bg-cacao-100 transition-colors"
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Input */}
            <div className="px-4 py-3 border-t border-cacao-100 flex gap-2">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && send()}
                placeholder="Escribe tu pregunta..."
                className="flex-1 bg-cacao-50 border border-cacao-200 rounded-2xl px-4 py-2.5 text-sm
                  text-cacao-800 placeholder-cacao-400 outline-none focus:border-cacao-400 transition-colors"
              />
              <button
                onClick={() => send()}
                className="w-10 h-10 bg-cacao-700 hover:bg-cacao-800 rounded-2xl flex items-center justify-center
                  transition-colors flex-shrink-0"
              >
                <Send size={16} className="text-cream" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toggle button */}
      <motion.button
        onClick={() => setOpen(!open)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="w-14 h-14 bg-cacao-700 hover:bg-cacao-800 rounded-full shadow-cacao-lg
          flex items-center justify-center transition-colors relative"
        aria-label="Abrir chat"
      >
        <AnimatePresence mode="wait">
          {open ? (
            <motion.div key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }}>
              <X size={22} className="text-cream" />
            </motion.div>
          ) : (
            <motion.div key="chat" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }}>
              <MessageCircle size={22} className="text-cream" />
            </motion.div>
          )}
        </AnimatePresence>
        {/* Notification dot */}
        {!open && (
          <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center">
            <span className="text-white text-xs font-bold">1</span>
          </div>
        )}
      </motion.button>
    </div>
  )
}
