import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "hero-galaxy": "url('/outer.gif')",
        "main-theme": "linear-gradient(to right top, #43ff00, #89ff00, #b6ff00, #dcff00, #fdff00)",
        "text-theme": "linear-gradient(to bottom, #ff1b1b, #ff6a00, #ffa000, #ffd100, #fdff00)",
        "home-text-theme": "linear-gradient(to right, #000000, #5b2b2b, #af5d33, #eba520, #fdff00)",
        "admin-theme": "linear-gradient(to bottom, #f20000, #f2001d, #f1002e, #ee003d, #ea004a, #e50055, #e0005f, #d90168, #d00b72, #c6177b, #bb2183, #af298a)",
      },
    },
  },
  plugins: [],
};
export default config;
