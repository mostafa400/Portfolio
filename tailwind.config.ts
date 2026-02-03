import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "primary": "#2463eb",
        "background-light": "#f8f9fc",
        "background-dark": "#111621",
        "surface-light": "#ffffff",
        "surface-dark": "#1a202c",
        "text-main": "#0e121b",
        "text-sub": "#4d6599",
      },
      fontFamily: {
        "display": ["Space Grotesk", "sans-serif"],
        "body": ["Space Grotesk", "sans-serif"],
      },
      borderRadius: {
        DEFAULT: "0.5rem",
        lg: "1rem",
        xl: "1.5rem",
        full: "9999px",
      },
      boxShadow: {
        modal: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
      },
    },
  },
  plugins: [],
};
export default config;
