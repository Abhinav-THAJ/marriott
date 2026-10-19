import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Biophilic Quaternary Healthcare Palette from Stitch
        primary: {
          DEFAULT: "#002023",
          dark: "#001719",
          container: "#0a363a",
          fixed: "#c1eaef",
          "fixed-dim": "#a5ced2",
        },
        secondary: {
          DEFAULT: "#3f665c",
          fixed: "#c1ebdf",
          "fixed-dim": "#a5cfc3",
          container: "#bee9dc",
          "on-container": "#436a60",
        },
        surface: {
          DEFAULT: "#f8faf2",
          bright: "#f8faf2",
          dim: "#d9dbd3",
          container: "#edefe7",
          "container-low": "#f3f4ec",
          "container-high": "#e7e9e1",
          "container-highest": "#e1e3dc",
          "container-lowest": "#ffffff",
        },
        "on-surface": {
          DEFAULT: "#191c18",
          variant: "#414849",
        },
        error: {
          DEFAULT: "#ba1a1a",
          container: "#ffdad6",
          "on-container": "#93000a",
        },
        // Backwards compatibility tokens
        navy: {
          950: "#002023",
          900: "#002b2f",
          800: "#0a363a",
          700: "#134e4a",
          600: "#044e46",
        },
        clinical: {
          900: "#002023",
          800: "#0a363a",
          700: "#0d9488",
          600: "#14b8a6",
          100: "#c1ebdf",
          50: "#f0fdfa",
        },
        teal: {
          900: "#002023",
          800: "#064e3b",
          700: "#047857",
          600: "#059669",
          500: "#10b981",
          100: "#c1ebdf",
          50: "#f0fdfa",
        },
      },
      fontFamily: {
        sans: ["var(--font-montserrat)", "Montserrat", "system-ui", "sans-serif"],
        heading: ["var(--font-montserrat)", "Montserrat", "system-ui", "sans-serif"],
        serif: ["var(--font-montserrat)", "Montserrat", "sans-serif"],
        montserrat: ["var(--font-montserrat)", "Montserrat", "system-ui", "sans-serif"],
      },
      boxShadow: {
        subtle: "0 1px 3px 0 rgba(0, 0, 0, 0.05), 0 1px 2px -1px rgba(0, 0, 0, 0.05)",
        card: "0 4px 20px -2px rgba(0, 32, 35, 0.06)",
        float: "0 20px 40px -15px rgba(0, 32, 35, 0.12)",
      },
    },
  },
  plugins: [],
};
export default config;
