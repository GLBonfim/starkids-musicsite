import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Paleta suave e profissional
        primary: {
          50: '#f0f7ff',
          100: '#e0effe',
          200: '#b9ddfe',
          300: '#7cc5fd',
          400: '#36a9fa',
          500: '#0c8ce9', // Azul principal suave
          600: '#006dc7',
          700: '#0157a1',
          800: '#064a85',
          900: '#0b3e6e',
        },
        accent: {
          50: '#fffbeb',
          100: '#fff3c6',
          200: '#ffe588',
          300: '#ffd24a', // Amarelo suave para CTAs
          400: '#ffbb20',
          500: '#f99607',
          600: '#dd6d02',
          700: '#b74b06',
          800: '#94390c',
          900: '#7a300d',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;