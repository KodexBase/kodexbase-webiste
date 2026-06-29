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
        black: "#000000",
        "bg-primary": "#05020A",
        "bg-secondary": "#0B0714",
        "bg-card": "#120B1E",
        "purple-deep": "#1a0030",
        "purple-brand": "#7B2FBE",
        "purple-neon": "#9D4EDD",
        "purple-glow": "#8F4FFF",
        "purple-accent": "#A855F7",
        "text-muted": "#A3A3B2",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        mono: ["JetBrains Mono", "Fira Code", "monospace"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "aurora": "linear-gradient(135deg, #4c1d95 0%, #7B2FBE 30%, #A855F7 60%, #c77dff 100%)",
      },
      animation: {
        "aurora": "aurora 20s ease infinite",
        "float": "float 6s ease-in-out infinite",
        "float-delayed": "float 6s ease-in-out infinite 1.5s",
        "float-slow": "float 9s ease-in-out infinite 3s",
        "pulse-glow": "pulse-glow 3s ease-in-out infinite",
        "shimmer": "shimmer 2.5s linear infinite",
        "border-spin": "border-spin 6s linear infinite",
        "gradient-shift": "gradient-shift 8s ease infinite",
        "fade-up": "fade-up 0.6s ease-out forwards",
        "counter": "counter 2s ease-out forwards",
      },
      keyframes: {
        aurora: {
          "0%, 100%": { backgroundPosition: "0% 50%", opacity: "0.7" },
          "50%": { backgroundPosition: "100% 50%", opacity: "1" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-14px)" },
        },
        "pulse-glow": {
          "0%, 100%": { boxShadow: "0 0 20px rgba(143,79,255,0.3)" },
          "50%": { boxShadow: "0 0 50px rgba(143,79,255,0.7), 0 0 100px rgba(143,79,255,0.2)" },
        },
        shimmer: {
          "0%": { transform: "translateX(-100%) skewX(-15deg)" },
          "100%": { transform: "translateX(400%) skewX(-15deg)" },
        },
        "border-spin": {
          "100%": { transform: "rotate(360deg)" },
        },
        "gradient-shift": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        "fade-up": {
          from: { opacity: "0", transform: "translateY(20px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
      boxShadow: {
        "glow-purple": "0 0 40px rgba(143, 79, 255, 0.35), 0 0 80px rgba(143, 79, 255, 0.15)",
        "glow-sm": "0 0 20px rgba(143, 79, 255, 0.25)",
        "glow-lg": "0 0 80px rgba(143, 79, 255, 0.45), 0 0 160px rgba(143, 79, 255, 0.15)",
        "card": "0 4px 24px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255,255,255,0.05)",
        "card-hover": "0 20px 60px rgba(0, 0, 0, 0.7), 0 0 40px rgba(143, 79, 255, 0.18), inset 0 1px 0 rgba(255,255,255,0.08)",
        "inset-glow": "inset 0 1px 0 rgba(255,255,255,0.06), inset 0 -1px 0 rgba(0,0,0,0.3)",
      },
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [],
};
export default config;
