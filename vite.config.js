import { defineConfig } from 'vite'
import { loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'
import { fileURLToPath } from 'url'
import pinnedHandler from './api/pinned.js'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

// https://vite.dev/config/
function pinnedApiPlugin() {
  return {
    name: 'pinned-api-plugin',
    configureServer(server) {
      server.middlewares.use('/api/pinned', (req, res, next) => {
        if (req.method !== 'GET') {
          return next()
        }

        return pinnedHandler(req, res)
      })
    },
  }
}

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')

  if (env.GITHUB_ACCESS_TOKEN) {
    process.env.GITHUB_ACCESS_TOKEN = env.GITHUB_ACCESS_TOKEN
  }

  if (env.GITHUB_TOKEN) {
    process.env.GITHUB_TOKEN = env.GITHUB_TOKEN
  }

  return {
    plugins: [tailwindcss(), react(), pinnedApiPlugin()],
    build: {
      rollupOptions: {
        input: path.resolve(__dirname, 'index.html'),
      },
    },
  }
})
