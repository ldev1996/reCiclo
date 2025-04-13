// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
  modules: ["@vite-pwa/nuxt"],
  pwa: {
    registerType: 'autoUpdate',
    manifest: {
      name: 'ECOmunidade',
      short_name: 'ECO',
      description: 'Troque e recicle com sua comunidade',
      theme_color: '#00C950', // green-500
      background_color: '#F9FAFB', // gray-50
      display: 'standalone',
      start_url: '/',
      icons: [
        {
          src: '/icon-192.png',
          sizes: '192x192',
          type: 'image/png'
        },
        {
          src: '/icon-512.png',
          sizes: '512x512',
          type: 'image/png'
        }
      ]
    }
  }
});