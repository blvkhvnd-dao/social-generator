import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      width: {
        '250px': '250px',
        '500px': '500px',
        '750px': '750px',
      },
      colors: {
        'blvk-gray': '#D9D9D9',
      },
    },
  },
  plugins: [],
}
export default config
