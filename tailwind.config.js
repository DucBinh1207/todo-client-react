/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      colors: {
        peri: "#6c63ff",
        "custom-gray-checked": "rgba(255, 255, 255, 0.5)",
      },
      fontFamily: {
        kanit: ["Kanit", "sans-serif"],
      },
      boxShadow: {
        "custom-inset": "0 0 10px 100px #6c63ff inset",
      },
    },
  },
  plugins: [],
};
