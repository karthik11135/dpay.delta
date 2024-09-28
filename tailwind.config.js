/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bgColor: "rgba(17,17,29,255)",
        greenColor: "rgba(72,220,164,255)",
        bgColorFrend: "rgba(26,44,71,255)",
      }
    },
  },
  plugins: [],
}

