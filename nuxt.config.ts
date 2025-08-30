// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";
import vuetify, { transformAssetUrls } from "vite-plugin-vuetify";

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
  build: {
    transpile: ["vuetify"],
  },
  modules: [
    "@nuxt/eslint",
    "@nuxt/icon",
    "@nuxt/scripts",
    "@nuxt/ui",
    "@nuxtjs/tailwindcss",
    "nuxt-locomotive-scroll",
    (_options, nuxt) => {
      nuxt.hooks.hook("vite:extendConfig", (config) => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        config.plugins.push(vuetify({ autoImport: true }));
      });
    },
  ],
  vite: {
    server: {
      fs: {
        strict: false,
      },
    },
    vue: {
      template: {
        transformAssetUrls,
      },
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
