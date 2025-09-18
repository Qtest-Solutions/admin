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
        // Professional Light Color Palette
        brand: {
          // Primary sage green tones
          sage: {
            50: "#f8faf9",
            100: "#f0f5f2",
            200: "#dbe8e0",
            300: "#b8d4c2",
            400: "#8bb89a",
            500: "#6b9f7c", // Main brand color
            600: "#578063",
            700: "#46654f",
            800: "#3a5442",
            900: "#314439",
          },
          // Secondary lavender tones
          lavender: {
            50: "#faf9fc",
            100: "#f3f2f7",
            200: "#e8e5ef",
            300: "#d4cde3",
            400: "#b8aacf",
            500: "#9d88b8", // Secondary color
            600: "#8670a3",
            700: "#725b8a",
            800: "#5f4d73",
            900: "#4f425e",
          },
          // Accent coral/peach tones
          coral: {
            50: "#fef9f7",
            100: "#fdf2ee",
            200: "#fae1d8",
            300: "#f5c6b8",
            400: "#eda190",
            500: "#e17d68", // Accent color
            600: "#d15d4a",
            700: "#af4738",
            800: "#913c32",
            900: "#77352e",
          },
          // Neutral warm grays
          neutral: {
            50: "#fafaf9",
            100: "#f5f5f4",
            200: "#e7e7e5",
            300: "#d4d4d1",
            400: "#a3a3a0",
            500: "#737370",
            600: "#525250",
            700: "#404040",
            800: "#2d2d2d",
            900: "#1a1a1a",
          },
        },
        // Legacy colors for backward compatibility
        primary: {
          teal: "#6b9f7c",
          blue: "#9d88b8",
        },
      },
      backgroundImage: {
        "gradient-professional":
          "linear-gradient(135deg, #f8faf9 0%, #faf9fc 50%, #fef9f7 100%)",
        "gradient-sage": "linear-gradient(135deg, #f0f5f2 0%, #dbe8e0 100%)",
        "gradient-lavender":
          "linear-gradient(135deg, #f3f2f7 0%, #e8e5ef 100%)",
        "gradient-coral": "linear-gradient(135deg, #fdf2ee 0%, #fae1d8 100%)",
      },
      boxShadow: {
        soft: "0 2px 15px -3px rgba(107, 159, 124, 0.1), 0 4px 6px -2px rgba(107, 159, 124, 0.05)",
        "soft-lg":
          "0 10px 25px -3px rgba(107, 159, 124, 0.1), 0 4px 6px -2px rgba(107, 159, 124, 0.05)",
        professional: "0 4px 20px -2px rgba(157, 136, 184, 0.15)",
      },
    },
  },
  plugins: [],
};
