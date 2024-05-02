// https://devp.appmaster.io/lib-studio-ui/story/docs-welcome-story-js

import type { Config } from 'tailwindcss'
import { ThemeTailwindcss } from './tailwind.theme'

export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: ThemeTailwindcss,
} satisfies Config
