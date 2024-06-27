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
        "main-theme": "linear-gradient(to bottom, #ec0000, #c3001c, #970023, #6a0a23, #3e0f1b, #39091b, #33041b, #2d001b, #430034, #510056, #500083, #2000b7)",
      },
    },
  },
  plugins: [],
};
export default config;
