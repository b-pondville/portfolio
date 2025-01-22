// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  ssr: true,
  css: [
    "@/assets/styles/reset.scss", // Ensure reset styles are loaded first
    "@/assets/styles/fonts.scss", // Load font styles after reset and variables
    "@/assets/styles/main.scss", // Load main styles last
  ],
  modules: [
    "@nuxtjs/google-fonts",
    "@nuxt/image",
    "@vueuse/nuxt",
    "nuxt-anchorscroll",
    "@formkit/auto-animate",
    "@vueuse/motion/nuxt",
  ],
  googleFonts: {
    families: {
      Raleway: [100, 700],
      Lato: [100, 300, 400, 700, 900],
    },
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/styles/variables.scss" as *;',
        },
      },
    },
  },
  image: {
    screens: {
      xs: 320,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      xxl: 1536,
      "2xl": 1536,
    },
  },
  server: {
    port: 4000, // Définir le port sur 4000
    host: "0.0.0.0", // Écouter sur toutes les interfaces
  },
});
