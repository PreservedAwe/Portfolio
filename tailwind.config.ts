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
        "main-theme": "linear-gradient(to top, #47a4f8, #00b8fc, #00c8ea, #00d4c5, #00db96, #00e3a5, #00eab4, #00f2c3, #3ef7ff, #a1f6ff, #e3f7ff, #ffffff)",
        "text-theme": "linear-gradient(to left bottom, #008ba7, #00757e, #005d55, #00452d, #002e07)",
        "admin-theme": "linear-gradient(to bottom, #f20000, #f2001d, #f1002e, #ee003d, #ea004a, #e50055, #e0005f, #d90168, #d00b72, #c6177b, #bb2183, #af298a)",
      },
    },
  },
  plugins: [],
};
export default config;
