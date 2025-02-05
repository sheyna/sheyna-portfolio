import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import eslint from 'vite-plugin-eslint'
import postCssNesting from 'postcss-nesting';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), eslint()],
  css: {
    postcss: {
      plugins: [
        postCssNesting()
      ]
    }
  }
})
