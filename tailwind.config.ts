import type { Config } from 'tailwindcss'
import { ThemeCss } from './tailwind.theme'

export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: ThemeCss,
} satisfies Config
