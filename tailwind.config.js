/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkBg: "#0C0C0C",
        darkCard: "#121212",
        cardBorder: "#222222",
        silverStart: "#646973",
        silverEnd: "#BBCCD7",
      },
      fontFamily: {
        sans: ["Kanit", "sans-serif"],
        kanit: ["Kanit", "sans-serif"],
      },
      animation: {
        marquee: "marquee 20s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
}
