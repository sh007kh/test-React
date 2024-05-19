/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        "bounce-back": "bounce 2s ease-in-out infinite",
      },
      keyframes: {
        bounce: {
          "0%, 100%": { scale: "1" },
          "50%": { scale: "1.4" },
        },
      },
    },
  },
  plugins: [],
};
