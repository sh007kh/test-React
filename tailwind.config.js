/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
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
