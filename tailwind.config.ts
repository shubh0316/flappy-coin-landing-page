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
    },
  },
  plugins: [textShadowPlugin], // Adding the text shadow plugin
};

export default config;
