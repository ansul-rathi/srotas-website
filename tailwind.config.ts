import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        dm: ["'DM Sans'", "sans-serif"],
        inter: ["Inter", "sans-serif"],
        helvetica: ["Helvetica", "Arial", "sans-serif"],
        source: ['"Source Sans Pro"', 'sans-serif'],
      },
    },
  },
  plugins: [],
} satisfies Config;
