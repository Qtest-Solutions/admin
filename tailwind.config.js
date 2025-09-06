/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ['"Segoe UI"', "Tahoma", "Geneva", "Verdana", "sans-serif"],
    },
    extend: {
      colors: {
        primary: {
          teal: "#50bcb7",
          blue: "#299fd0",
        },
      },
    },
  },
  plugins: [],
};
