import { text } from 'framer-motion/client';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        background:"#500073",
        background2:"#0d0115",
        text:"#f3dcfe",
        primary: "#d274fa",
        secondary: "#a90633",
        accent: "#f84132"
      }
    },
  },
  plugins: [],
}