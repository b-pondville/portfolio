// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  css: ["@/assets/styles/main.scss"],
  modules: ["@nuxtjs/google-fonts", "@nuxt/image"],
  googleFonts: {
    families: {
      Raleway: true,
      Lato: true,
    },
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData:
            '@use "@/assets/styles/colors.scss" as *; @use "@/assets/styles/fonts.scss" as *;',
        },
      },
    },
  },
});