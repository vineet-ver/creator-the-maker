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
        background: "#FFFFFF",
        foreground: "#09090B",
        ctm: {
          white: "#FFFFFF",
          offwhite: "#F8F8F9",
          surface: "#FFFFFF",
          surfaceSubtle: "#F4F4F6",
          surfaceHover: "#EFEFF2",
          surfaceActive: "#E4E4E7",
          border: "#E4E4E7",
          borderSubtle: "#F1F1F4",
          borderLight: "#D4D4D8",
          borderDark: "#18181B",
          black: "#09090B",
          charcoal: "#18181B",
          cardDark: "#0C0C0E",
          red: "#E11D48",
          redHover: "#BE123C",
          redBright: "#FF1E27",
          redGlow: "rgba(225, 29, 72, 0.15)",
          muted: "#71717A",
          lightMuted: "#52525B",
          cream: "#FAFAFA",
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
        "fade-in": "fadeIn 0.3s ease-out forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(6px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
