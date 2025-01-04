import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      clipPath: {
        footerClipPath: "url(#footerClipPath)", // Existing clipPath
        ClipPath: "url(#cloudClipPath)", // New clipPath
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        sans: ["Super Sedan"],
      },
    },
  },
  plugins: [],
} satisfies Config;
