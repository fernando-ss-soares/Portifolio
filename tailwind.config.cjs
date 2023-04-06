/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}"],
  theme: {
      fontFamily: {
        inter: ['Inter', 'sans-serif']
      },
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')
  ],
};
