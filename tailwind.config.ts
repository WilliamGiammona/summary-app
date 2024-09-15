import type { Config } from "tailwindcss";
import { fontFamily as defaultFontFamily } from "tailwindcss/defaultTheme";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-roboto)", "sans-serif", ...defaultFontFamily.sans],
      },
      colors: {
        "nav-default": "#032b41",
        "nav-hover": "#2BD97C",
      },
    },
  },
  plugins: [],
};

export default config;
