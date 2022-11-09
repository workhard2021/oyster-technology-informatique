/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./containers/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        fontWeight:{'fontWeightBig':600,
             'fontWeightSmall':300
        },
        text:{
           lg:'35px',
           sm:'16px'
        },
    },
  },
  plugins: [],
}
