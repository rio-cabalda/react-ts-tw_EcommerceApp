/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        expand: {
        '0%,100%': { transform: 'scale(1)' },
        '50%': { transform: 'scale(1.2)' },
                }
        },
      animation: {
        pulsing: 'expand 1s ease-in-out infinite',
        },
      screens: {
        'mobile-400' : '400px'
      },     
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.will-change-backface-visibility': {
          'will-change': 'transform, opacity',
          'backface-visibility': 'hidden',
        },
      };

      addUtilities(newUtilities, ['hover', 'focus']);
    },
  ],
}

