import type { Config } from 'tailwindcss'

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
        'custom-orange': '#E27D60',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
export default config

//light (#cad2c5): RGB(202, 210, 197)
// midlight (#84a98c): RGB(132, 169, 140)
// mid (#52796f): RGB(82, 121, 111)
// middark (#354f52): RGB(53, 79, 82)
// dark (#2f3e46): RGB(47, 62, 70)
// custom-orange (#E27D60): RGB(226, 125, 96) ​
