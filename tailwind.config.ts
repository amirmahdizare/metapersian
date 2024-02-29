import type { Config } from "tailwindcss";

const config: Config = {
  darkMode:'class',
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
      },
      colors:{
        'light-content-bg':'#080807',
        'light-menu-bg':'#1A1A18',
        'light-text-gray':'#868B90'
      },
      borderRadius:{
        'app':'10px',
        'app-curve':'100px'
      }
    
    },
    
  },
  plugins: [],
};
export default config;
