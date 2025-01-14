//@ts-nocheck
import type { Config } from "tailwindcss";
import textShadowPlugin from "tailwindcss-textshadow";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      clipPath: {
        footerClipPath: "url(#footerClipPath)", // Existing clipPath
        cloudClipPath: "url(#cloudClipPath)", // New clipPath with a corrected key name
      },
      colors: {
        background: "var(--background)", // Custom background color
        foreground: "var(--foreground)", // Custom foreground color
      },
      fontFamily: {
        sans: ["Super Sedan", "sans-serif"], // Added fallback font
      },
      textStroke: {
        sm: "1px", // Small stroke
        DEFAULT: "1px", // Default stroke
        lg: "3px", // Large stroke
      },
    },
  },
  plugins: [
    textShadowPlugin, // Adding the text shadow plugin
    function ({ addUtilities, theme }) {
      const strokeUtilities = {
        ".text-stroke-sm": {
          WebkitTextStroke: theme("textStroke.sm"),
        },
        ".text-stroke": {
          WebkitTextStroke: theme("textStroke.DEFAULT"),
        },
        ".text-stroke-lg": {
          WebkitTextStroke: theme("textStroke.lg"),
        },
      };
      addUtilities(strokeUtilities, ["responsive"]);
    },
  ],
};

export default config;
