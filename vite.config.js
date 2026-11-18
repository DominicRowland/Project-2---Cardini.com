import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import { resolve } from 'path';

export default defineConfig({
  plugins: [svelte()],
  build: {
    rollupOptions: {
      input: {
        index: resolve(__dirname, 'index.html'),
        story: resolve(__dirname, 'story.html'),
        performances: resolve(__dirname, 'performances.html'),
        collection: resolve(__dirname, 'collection.html'),
        trivia: resolve(__dirname, 'trivia.html')
      }
    }
  }
});