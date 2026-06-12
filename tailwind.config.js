/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        duck: {
          yellow: '#FFD93D',
          orange: '#FF9F1C',
          light: '#FFF3B0',
        },
        clay: {
          50: '#fef7f0',
          100: '#fde9d5',
          200: '#f9d2ab',
          300: '#f5b57f',
          400: '#f19455',
          500: '#ed7332',
        },
        sky: {
          light: '#E0F7FA',
          blue: '#4FC3F7',
        }
      },
      fontFamily: {
        'kid': ['Comic Sans MS', 'Chalkboard', 'Arial Rounded MT Bold', 'sans-serif'],
      },
      boxShadow: {
        'clay': '8px 8px 16px rgba(0,0,0,0.2), -4px -4px 12px rgba(255,255,255,0.8)',
        'clay-sm': '4px 4px 8px rgba(0,0,0,0.15), -2px -2px 6px rgba(255,255,255,0.7)',
        'clay-lg': '12px 12px 24px rgba(0,0,0,0.25), -6px -6px 16px rgba(255,255,255,0.9)',
      },
      borderRadius: {
        'clay': '24px',
        'clay-lg': '32px',
      },
      animation: {
        'bounce-slow': 'bounce 2s infinite',
        'wiggle': 'wiggle 1s ease-in-out infinite',
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        }
      }
    },
  },
  plugins: [],
}
