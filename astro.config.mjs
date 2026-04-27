import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  integrations: [],
  output: 'static',
  server: {
    host: 'localhost',
    port: 3000,
  },
});
