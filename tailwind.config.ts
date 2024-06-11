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
        "hero-galaxy": "url('/galaxy.jpg')",
        "main-theme": "linear-gradient(to right top, #1b36e9, #6012a9, #620071, #500044, #340623, #2f192d, #2d2631, #303030, #525252, #767676, #9c9c9c, #c4c4c4)",
      },
    },
  },
  plugins: [],
};
export default config;
