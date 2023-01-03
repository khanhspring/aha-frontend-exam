/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'Helvetica', 'Arial', 'sans-serif'],
        ubuntu: ['Ubuntu', 'Helvetica', 'Arial', 'sans-serif']
      },
      colors: {
        "cod-gray": {
          900: '#080808',
          800: '#181818',
          700: '#1B1B1B',
          650: '#242424',
          600: '#929292',
        },
        "azure-radiance": {
          900: '#00A3FF'
        }
      },
      boxShadow: {
        overlay: '4px 4px 20px rgba(0, 0, 0, 0.3)'
      },
      keyframes: {
        'slide-down': {
          '0%': { opacity: 0.7, transform: 'translateY(-15px)'},
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        'slide-up': {
          '0%': { opacity: 1, transform: 'translateY(0px)'},
          '100%': { opacity: 0, transform: 'translateY(-15px)'},
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        }
      },
      animation: {
        'slide-down': 'slide-down 0.2s ease-in-out forwards',
        'slide-up': 'slide-up 0.2s ease-in forwards',
        wiggle: 'wiggle 0.77s ease-in-out infinite'
      }
    }
  },
  plugins: [],
}
