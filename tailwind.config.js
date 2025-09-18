/** @type {import('tailwindcss').Config} */
export default {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: [
        '"Inter"',
        '"Segoe UI"',
        "Tahoma",
        "Geneva",
        "Verdana",
        "sans-serif",
      ],
    },
    extend: {
      colors: {
        "brand-sage": {
          50: "#f8faf9",
          100: "#f0f5f2",
          200: "#dbe8e0",
          300: "#b8d4c2",
          400: "#8bb89a",
          500: "#6b9f7c",
          600: "#578063",
          700: "#46654f",
          800: "#3a5442",
          900: "#314439",
        },
        "brand-lavender": {
          50: "#faf9fc",
          100: "#f3f2f7",
          200: "#e8e5ef",
          300: "#d4cde3",
          400: "#b8aacf",
          500: "#9d88b8",
          600: "#8670a3",
          700: "#725b8a",
          800: "#5f4d73",
          900: "#4f425e",
        },
        "brand-coral": {
          50: "#fef9f7",
          100: "#fdf2ee",
          200: "#fae1d8",
          300: "#f5c6b8",
          400: "#eda190",
          500: "#e17d68",
          600: "#d15d4a",
          700: "#af4738",
          800: "#913c32",
          900: "#77352e",
        },
      },
    },
  },
  plugins: [],
};
