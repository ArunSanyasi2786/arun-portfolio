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
        ink: '#030814',
        panel: '#071426',
        electric: '#22d3ee',
        cobalt: '#2563eb',
        neon: '#67e8f9',
        steel: '#8aa4c2'
      },
      boxShadow: {
        neon: '0 0 30px rgba(34, 211, 238, 0.34)',
        cobalt: '0 20px 80px rgba(37, 99, 235, 0.28)'
      },
      backgroundImage: {
        'grid-blue': 'linear-gradient(rgba(34,211,238,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(34,211,238,0.12) 1px, transparent 1px)'
      }
    }
  },
  plugins: []
};
