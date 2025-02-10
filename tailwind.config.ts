import type { Config } from 'tailwindcss'
import { nextui } from '@nextui-org/react'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    colors: {
      primary: {
        DEFAULT: '#269bb5',
      },
      secondary: {
        DEFAULT: '#242578',
      },
      'example-color': '#AA783d',
    },
    extend: {},
  },
  darkMode: 'class',
  plugins: [nextui()],
}
export default config
