import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          base: "#07070F",
          card: "#0F0F1A",
          glass: "rgba(255,255,255,0.04)",
        },
        brand: {
          cyan: "#22D3EE",
          blue: "#6366F1",
          purple: "#A855F7",
        },
        border: {
          subtle: "rgba(255,255,255,0.08)",
          glow: "rgba(34,211,238,0.3)",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
      },
      backgroundImage: {
        "hero-gradient":
          "radial-gradient(ellipse 80% 60% at 50% -10%, rgba(99,102,241,0.25) 0%, transparent 70%)",
        "card-gradient":
          "linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.01) 100%)",
        "brand-gradient":
          "linear-gradient(90deg, #22D3EE 0%, #6366F1 50%, #A855F7 100%)",
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease forwards",
        glow: "glow 3s ease-in-out infinite alternate",
        "border-spin": "borderSpin 4s linear infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        glow: {
          "0%": { boxShadow: "0 0 20px rgba(34,211,238,0.1)" },
          "100%": { boxShadow: "0 0 40px rgba(99,102,241,0.3)" },
        },
      },
      boxShadow: {
        glass: "0 8px 32px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.08)",
        glow: "0 0 30px rgba(34,211,238,0.2)",
        "card-hover": "0 20px 60px rgba(0,0,0,0.5), 0 0 30px rgba(99,102,241,0.15)",
      },
    },
  },
  plugins: [],
};

export default config;
