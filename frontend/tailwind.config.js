/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,json}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['Space Grotesk', 'ui-sans-serif'],
        body: ['IBM Plex Sans', 'ui-sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace']
      },
      colors: {
        ink: '#050505',
        panel: '#111111',
        electric: '#F5C542',
        cobalt: '#D99A00',
        neon: '#FFE08A',
        steel: '#B7B7B7'
      },
      boxShadow: {
        neon: '0 0 30px rgba(245, 197, 66, 0.34)',
        cobalt: '0 20px 80px rgba(217, 154, 0, 0.28)'
      },
      backgroundImage: {
        'grid-gold': 'linear-gradient(rgba(245,197,66,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(245,197,66,0.12) 1px, transparent 1px)'
      }
    }
  },
  plugins: []
};
