import type { Config } from 'tailwindcss';
const defaultTheme = require('tailwindcss/defaultTheme');

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        light: '#cad2c5',
        midlight: '#84a98c',
        mid: '#52796f',
        middark: '#354f52',
        dark: '#2f3e46',
        'custom-orange': '#e06a48',
        darkWave: '#90c0f',

        // Light theme
        'light-bg': '#cad2c5',
        'light-text': '#2f3e46',
        'light-accent': '#e06a48',

        // Forest theme
        'forest-bg': '#52796f',
        'forest-text': '#cad2c5',
        'forest-accent': '#e06a48',
        'forest-floral-bg': 'url("/floral_background.svg")',

        // Fractal theme
        'fractal-bg': '#2f3e46',
        'fractal-text': '#cad2c5',
        'fractal-accent': '#e06a48',

        // Vector theme
        'vector-bg': '#354f52',
        'vector-text': '#84a98c',
        'vector-accent': '#90c0f',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'floral-bg': 'url("/floral_background.svg")', // add this line
        'woods-bg': 'url("/woods_background.svg")', // add this line

      },
      fontFamily: {
        'sans': ['"Proxima Nova"', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};

export default config;
