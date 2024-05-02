import { fileURLToPath, URL } from 'node:url'

import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import autoImport from 'unplugin-auto-import/vite'
import components from 'unplugin-vue-components/vite'
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')

  return {
    base: env.VITE_BASE_URL,
    server: {
      port: 8080,
    },
    build: {
      emptyOutDir: true,
      target: 'esnext',
    },
    optimizeDeps: {
      esbuildOptions: {
        tsconfigRaw: {
          compilerOptions: {
            experimentalDecorators: true,
          },
        },
      },
    },
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },

    plugins: [
      vue(),

      autoImport({
        dts: 'auto-imports.d.ts',
        dirs: ['src/utils', 'src/stores'],
        imports: [
          'vue',
          'vue-router',
          'pinia',

          {
            'vue-i18n': ['useI18n'],
          },
        ],
      }),
      components({
        dts: 'components.d.ts',
        dirs: ['src/components'],
        extensions: ['vue'],
        include: [/\.vue$/, /\.vue\?vue/],
        directoryAsNamespace: true,
        resolvers: [NaiveUiResolver()],
      }),
    ],
  }
})
