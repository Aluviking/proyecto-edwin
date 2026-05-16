/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cacao: {
          50:  '#FDF8F3',
          100: '#F4EBDD',
          200: '#E8D5B7',
          300: '#D8C3A5',
          400: '#C4A882',
          500: '#A8845A',
          600: '#8B6340',
          700: '#6F4E37',
          800: '#4A3020',
          900: '#2C1A0E',
        },
        leaf: {
          50:  '#F0F4EE',
          100: '#D9E4D4',
          200: '#B3C9A9',
          300: '#8DAE7E',
          400: '#6B8F5E',
          500: '#5E6B4E',
          600: '#4A5A3C',
          700: '#38462E',
          800: '#263120',
          900: '#141C12',
        },
        cream: '#F4EBDD',
        beige: '#D8C3A5',
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        playfair: ['"Playfair Display"', 'serif'],
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease-out forwards',
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'slide-left': 'slideLeft 0.6s ease-out forwards',
        'float': 'float 3s ease-in-out infinite',
        'pulse-slow': 'pulse 3s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideLeft: {
          '0%': { opacity: '0', transform: 'translateX(-30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      backgroundImage: {
        'texture-cacao': "url('/textures/cacao-texture.svg')",
        'grain': "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.05'/%3E%3C/svg%3E\")",
      },
      boxShadow: {
        'cacao': '0 4px 24px rgba(111, 78, 55, 0.15)',
        'cacao-lg': '0 8px 40px rgba(111, 78, 55, 0.2)',
        'leaf': '0 4px 24px rgba(94, 107, 78, 0.2)',
      },
    },
  },
  plugins: [],
}
