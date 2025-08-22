// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  app: {
    head: {
      meta: [
        {
          name: "viewport",
          content: "width=device-width, initial-scale=1.0, maximum-scale=1.0",
        },
      ],
    },
  },
  compatibilityDate: "2025-05-15",
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],

  modules: [
    "@nuxt/eslint",
    "@nuxt/icon",
    "@nuxt/scripts",
    "@nuxt/ui",
    "@nuxtjs/tailwindcss",
  ],
  vite: {
    server: {
      fs: {
        strict: false
      }
    },
    plugins: [tailwindcss()],
    // css: {
    //   preprocessorOptions: {
    //     scss: {
    //       additionalData: '@use "~/assets/scss/main.scss" as *;',
    //     },
    //   },
    // },
  },
  runtimeConfig: {
    public: {
      apiBaseUrl: process.env.NUXT_API_BASE_URL,
    },
  },
});
