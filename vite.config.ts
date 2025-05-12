import { sveltekit } from '@sveltejs/kit/vite';

/** @type {import('vite').UserConfig} */
const config = {
  plugins: [sveltekit()],
  preview: {
    host: true,
    port: 4173,
    allowedHosts: ['weather-tracker-9dfv.onrender.com']
  }
};

export default config;

