/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        destructive: {
          DEFAULT: "#ef4444", // rojo Tailwind (red-500)
          90: "#fca5a5", // red-300 (para hover:bg-destructive/90)
        },
      },
    },
  },
  plugins: [],
};
