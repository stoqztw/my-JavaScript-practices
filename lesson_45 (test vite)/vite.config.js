import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'

const __dirname = dirname(fileURLToPath(import.meta.url))

export default defineConfig({
	build: {
		rollupOptions: {
			input: {
				main: resolve(__dirname, 'index.html')
			},
			output: {
				entryFileNames: 'main.js',
				chunkFileNames: 'chunk-[name].js',
				assetFileNames: 'asset-[name].[ext]'
			}
		},
		server: {
			port: 3000,
		},
		preview: {
			port: 8080,
		},
		assetsDir: 'assets'
	},
})