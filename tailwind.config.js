const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    'node_modules/flowbite-react/lib/esm/**/*.js',
    flowbite.content(),
  ],
  theme: {
    extend: {
      colors: {
        primary: '#3f83f8', // Blue button color
        secondary: '#23262d', // Dark background color
        lightBackground: "#22272c",
        lightBackground2:"#30394f",
        darkBackground: "#141416"
      },
      fontFamily: {
        mrgvlovani: ["Mrgvlovani", "sans-serif"],
      },
      keyframes: {
        scroll: {
          '0%': { opacity: '1' },
          '100%': { opacity: '0', transform: 'translateY(26px)' },
        },
      },
      animation: {
        scroll: 'scroll 1.5s infinite',
      },
      spacing: {
        '7.5': '30px',
        '12.5': '50px',
      },
    },
  },
  plugins: [require('flowbite/plugin'),flowbite.plugin()],
}

