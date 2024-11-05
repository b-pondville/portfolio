// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  ssr: true,
  css: ["@/assets/styles/main.scss"],
  modules: ["@nuxtjs/google-fonts", "@nuxt/image", "@vueuse/nuxt"],
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
          additionalData:
            '@use "@/assets/styles/reset.scss" as *; @use "@/assets/styles/colors.scss" as *; @use "@/assets/styles/fonts.scss" as *;',
        },
      },
    },
  },
});
