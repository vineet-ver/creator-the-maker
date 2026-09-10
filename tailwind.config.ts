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
        background: "#050505",
        foreground: "#EDEDED",
        ctm: {
          black: "#050505",
          charcoal: "#0D0D0D",
          surface: "#121212",
          surfaceHover: "#181818",
          surfaceActive: "#202020",
          border: "#242424",
          borderSubtle: "#171717",
          borderLight: "#333333",
          muted: "#737373",
          lightMuted: "#A3A3A3",
          cream: "#F4F4F5",
          red: "#E11D48",
          redHover: "#FF2B2B",
          redGlow: "rgba(225, 29, 72, 0.15)",
        },
      },
      fontFamily: {
        sans: ["var(--font-space-grotesk)", "var(--font-inter)", "sans-serif"],
        display: ["var(--font-space-grotesk)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
        mono: ["monospace"],
      },
      letterSpacing: {
        tighter: "-0.05em",
        tight: "-0.025em",
        widest: "0.2em",
        ultraWide: "0.3em",
      },
      animation: {
        "pulse-subtle": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "fade-in": "fadeIn 0.4s ease-out forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(8px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
