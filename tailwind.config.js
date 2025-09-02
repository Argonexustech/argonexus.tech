module.exports = {
  content: ["./*.html", "./post/*.html"],
  theme: {
    extend: {
      fontFamily: { sans: ['Inter', 'sans-serif'] },
      height: {
        '112': '28rem', // 448px for extra large logo
      },
      colors: {
        'brand-primary': '#2563EB', // Professional blue from logo
        'brand-secondary': '#F97316', // Professional orange from logo
        'brand-accent': '#0EA5E9', // Light blue accent
        'brand-dark': '#0F172A', // Deep navy for backgrounds
        'brand-light': '#F8FAFC', // Clean white
        'brand-gray': {
          50: '#F8FAFC',
          100: '#F1F5F9',
          200: '#E2E8F0',
          300: '#CBD5E1',
          400: '#94A3B8',
          500: '#64748B',
          600: '#475569',
          700: '#334155',
          800: '#1E293B',
          900: '#0F172A',
        }
      }
    }
  },
  plugins: [require('@tailwindcss/typography')],
}