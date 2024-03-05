import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: 'class',
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
      colors: {
        'dark-active-btn': '#FFC700',
        'dark-off-btn': '#C9C9C9',
        'dark-Font': '#E1E1E1',
        'dark-bg': '#000000',
        'dark-tooltip': '#868B90',
        'dark-hover': '#FDD136',
        'dark-error': '#C30000',
        'dark-error-input': '#ff00000',
        'dark-on-bg': '#1A1A18',
        'dark-success': '#00966D',
        'dark-font-success': '#18C08F',
        'dark-link': '#2a85ff',
        'dark-tex-gray': '#C4C4C4',
        'dark-section-color':'#080807'

      },
      borderRadius: {
        'app': '10px',
        'app-curve': '100px'
      },
      boxShadow: {
        'card': '2px 2px 20.700000762939453px 0px rgba(245, 245, 245, 0.3) '
      }

    },

  },
  plugins: [],
};
export default config;
