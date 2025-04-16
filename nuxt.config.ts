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
  modules: ["@vite-pwa/nuxt", "@nuxtjs/supabase"],
  pwa: {
    registerType: 'autoUpdate',
    manifest: {
      "name": "ECOmunidade",
      "short_name": "ECO",
      "description": "Troque e recicle com sua comunidade",
      "start_url": "/",
      "display": "standalone",
      "background_color": "#F9FAFB", // green-500
      "theme_color": "#00C950", // gray-50
      "lang": "pt-br",
      "scope": "/",
      "icons": [
        {
          "src": "/icon-192.png",
          "sizes": "192x192",
          "type": "image/png"
        },
        {
          "src": "/icon-512.png",
          "sizes": "512x512",
          "type": "image/png"
        }
      ]
    }
  },
  supabase: {
    redirect: false,
    // redirectOptions: {}
    url: process.env.POSTGRES_URL,
    key: process.env.SUPABASE_ANON_KEY
  },
  app: {
    head: {
      link: [
        { rel: 'manifest', href: '/manifest.webmanifest' }
      ]
    }
  }
});