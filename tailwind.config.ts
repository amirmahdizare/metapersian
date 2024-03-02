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
        'dark-active-btn':'#FFC700',
        'dark-off-btn':'#C9C9C9',
        'dark-Font':'#E1E1E1',
        'dark-bg':'#000000',
        'dark-tooltip':'#868B90',
        'dark-hover':'#FDD136',
        'dark-error':'#C30000',
        'dark-error-input':'#ff00000',
        'dark-on-bg':'#1A1A18',
        'dark-success':'#00966D',
        'dark-font-success':'#18C08F',
        'dark-link':'#2a85ff',

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
