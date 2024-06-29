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
        "main-theme": "linear-gradient(to top, #3eabfd, #36a1f2, #2d97e7, #238edd, #1884d2, #2b8ad2, #3a91d3, #4797d3, #6baede, #8ec6e8, #b3dcf3, #d8f3ff)",
        "admin-theme": "linear-gradient(to bottom, #f20000, #f2001d, #f1002e, #ee003d, #ea004a, #e50055, #e0005f, #d90168, #d00b72, #c6177b, #bb2183, #af298a)",
      },
    },
  },
  plugins: [],
};
export default config;
