import { sveltekit } from '@sveltejs/kit/vite';

/** @type {import('vite').UserConfig} */
const config = {
  plugins: [sveltekit()],
  preview: {
    port: 3000,
    host: true,
    allowedHosts: ['weather-tracker-9dfv.onrender.com']
  }
};

export default config;
