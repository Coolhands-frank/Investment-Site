/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        fadeInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-100%)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
      },
      animation: {
        fadeInLeft: 'fadeInLeft 1s ease-out', // You can adjust the duration and easing
      },
      borderRadius: {
        '4xl': '2rem', // Example custom value
        '5xl': '2.5rem', // Larger custom value
        '6xl': '5rem',
        '8xl': '6rem',
      },
      boxShadow: {
        'rd': '25px 25px 20px -3px rgba(0, 0, 0, 0.1), 4px 4px 6px -2px rgba(0, 0, 0, 0.05)',
        'tr1': '100px -50px 2px rgba(0, 0, 0, 0.03)',
        'tr2': '140px -80px 2px rgba(0, 0, 0, 0.03)'
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.no-scrollbar': {
          '-ms-overflow-style': 'none',
          'scrollbar-width': 'none',
        },
        '.no-scrollbar::-webkit-scrollbar': {
          'display': 'none',
        },
      })
    }
  ],
};
