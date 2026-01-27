import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  modules: ["@nuxt/ui"],
  css: ["~/assets/css/main.css"],
  vite: { plugins: [tailwindcss()] },
  runtimeConfig: {
    tornApiKey: process.env.TORN_API_KEY,
  },
});
