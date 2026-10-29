import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

const ASAP = 'var(--font-asap), "Asap", "Asap Sharp", sans-serif';
const POPPINS = 'var(--font-poppins), "Poppins", sans-serif';

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        brand: { DEFAULT: "#e9992d", dark: "#d98a1f", soft: "#fdf3e4" },
        gold: "#f6b132",
        ink: "#0b0b0c",
        navy: "#111827",
      },
      fontFamily: {
        heading: [ASAP],
        asap: [ASAP],
        body: [POPPINS],
        mont: [POPPINS],
        outfit: [POPPINS],
        poppins: [POPPINS],
      },
    },
  },
  plugins: [
    // Toggled on <body> by CustomCursor.tsx
    plugin(({ addBase }) => {
      addBase({
        "@media (hover: hover) and (pointer: fine)": {
          "body.custom-cursor-active *": { cursor: "none !important" },
          'body.custom-cursor-active input:not([type="submit"]):not([type="button"]), body.custom-cursor-active textarea': {
            cursor: "text !important",
          },
        },
      });
    }),
  ],
};

export default config;
