// vite.config.ts
import { defineConfig } from 'vite'
import build from '@hono/vite-build/bun';
import devServer from '@hono/vite-dev-server';
import bunAdapter from '@hono/vite-dev-server/bun';

const entry = './src/index.ts';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 3000, // change to a custom port
  },
  build: {
    outDir: "build", // change to 'build', explain later
  },
  plugins: [
    build({
      entry: entry,
    }),
    devServer({
      entry: entry,
      adapter: bunAdapter,
    })
  ],
});
