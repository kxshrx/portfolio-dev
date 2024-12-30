/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#5A5A5A',
          light: '#757575',
          dark: '#404040'
        },
        secondary: {
          DEFAULT: '#A8A8A8',
          light: '#BFBFBF',
          dark: '#8F8F8F'
        },
        accent: '#7C3AED',
        'text-primary': '#333333',
        'text-secondary': '#757575',
        'dark-text-primary': '#E1E1E1',
        'dark-text-secondary': '#B0B0B0',
        bg: {
          light: '#F5F5F5',
          dark: '#1E1E1E',
          darker: '#141414'
        },
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif']
      },
      animation: {
        'gradient': 'gradient 4s ease infinite',
      },
      keyframes: {
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
    },
  },
  plugins: [
    function({ addVariant }) {
      addVariant('light', '.light &')
    }
  ],
}
