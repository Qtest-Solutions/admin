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
      display: [
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
        // Modern Professional Color Palette (DeskWorks Inspired)
        brand: {
          // Primary blue tones (professional corporate)
          primary: {
            50: "#f0f7ff",
            100: "#e0f2fe",
            200: "#bae6fd",
            300: "#7dd3fc",
            400: "#38bdf8",
            500: "#0ea5e9", // Main brand color
            600: "#0284c7",
            700: "#0369a1",
            800: "#075985",
            900: "#0c4a6e",
          },
          // Secondary slate tones (professional neutral)
          slate: {
            50: "#f8fafc",
            100: "#f1f5f9",
            200: "#e2e8f0",
            300: "#cbd5e1",
            400: "#94a3b8",
            500: "#64748b",
            600: "#475569",
            700: "#334155",
            800: "#1e293b",
            900: "#0f172a",
          },
          // Accent emerald tones (professional success/action)
          accent: {
            50: "#ecfdf5",
            100: "#d1fae5",
            200: "#a7f3d0",
            300: "#6ee7b7",
            400: "#34d399",
            500: "#10b981",
            600: "#059669",
            700: "#047857",
            800: "#065f46",
            900: "#064e3b",
          },
          // Additional soft palettes used in components
          sage: {
            50: "#f6fbf9",
            100: "#eaf6f1",
            200: "#d4eee3",
            300: "#b6e0cf",
            400: "#86ccb3",
            500: "#5abf9b",
            600: "#3ea882",
            700: "#2f8467",
            800: "#286b56",
            900: "#1f5242",
          },
          lavender: {
            50: "#faf8ff",
            100: "#f3efff",
            200: "#e7ddff",
            300: "#d3bfff",
            400: "#b897ff",
            500: "#9f6bff",
            600: "#8346f4",
            700: "#6b34cf",
            800: "#562aa8",
            900: "#442185",
          },
          coral: {
            50: "#fff6f3",
            100: "#ffe8e1",
            200: "#ffd1c4",
            300: "#ffb29a",
            400: "#ff8e6b",
            500: "#ff6c44",
            600: "#f0532b",
            700: "#c83f20",
            800: "#9e341d",
            900: "#7e2b1a",
          },
          // Neutral cool grays (professional foundation)
          neutral: {
            50: "#fafafa",
            100: "#f4f4f5",
            200: "#e4e4e7",
            300: "#d4d4d8",
            400: "#a1a1aa",
            500: "#71717a",
            600: "#52525b",
            700: "#3f3f46",
            800: "#27272a",
            900: "#18181b",
          },
        },
        // Legacy colors for backward compatibility
        primary: {
          teal: "#0ea5e9",
          blue: "#0284c7",
        },
      },
      backgroundImage: {
        "gradient-professional":
          "linear-gradient(135deg, #f0f7ff 0%, #e0f2fe 50%, #bae6fd 100%)",
        "gradient-subtle":
          "linear-gradient(135deg, #f8fafc 0%, #f1f5f9 50%, #e2e8f0 100%)",
        "gradient-accent":
          "linear-gradient(135deg, #ecfdf5 0%, #d1fae5 50%, #a7f3d0 100%)",
        "gradient-glass":
          "linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(255, 255, 255, 0.85) 100%)",
        "gradient-sage":
          "linear-gradient(135deg, rgba(214, 245, 235, 0.6) 0%, rgba(186, 230, 201, 0.5) 50%, rgba(180, 220, 210, 0.4) 100%)",
      },
      keyframes: {
        "gentle-float": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      animation: {
        "gentle-float": "gentle-float 6s ease-in-out infinite",
      },
      boxShadow: {
        soft: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
        "soft-lg":
          "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
        professional:
          "0 10px 25px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
        "professional-lg":
          "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
        "glow-sage": "0 0 0 3px rgba(90, 191, 155, 0.25)",
        "glow-lavender": "0 0 0 3px rgba(159, 107, 255, 0.25)",
        "glow-coral": "0 0 0 3px rgba(255, 108, 68, 0.25)",
      },
      spacing: {
        18: "4.5rem",
        88: "22rem",
        128: "32rem",
      },
      fontSize: {
        "display-lg": ["3.5rem", { lineHeight: "1.1", fontWeight: "700" }],
        "display-md": ["2.5rem", { lineHeight: "1.2", fontWeight: "700" }],
        "display-sm": ["2rem", { lineHeight: "1.3", fontWeight: "600" }],
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.5rem",
        "3xl": "2rem",
      },
    },
  },
  plugins: [],
};
