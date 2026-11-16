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
        brand: {
          navy: '#0b1528',
          navyLight: '#14223d',
          navyDeep: '#060d19',
          gold: '#c5a880',
          goldLight: '#e4cdad',
          goldDark: '#9f7e53',
          bronze: '#8e6b3e',
          grayBg: '#f7f8fa',
          grayBorder: '#e2e5eb',
          textPrimary: '#1a1f2c',
          textMuted: '#64748b'
        }
      },
      fontFamily: {
        sans: ['Pretendard', 'sans-serif'],
      }
    },
  },
  plugins: [],
};
export default config;
