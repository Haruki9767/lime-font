export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: false },
  css: ["~/assets/css/main.css"],
  typescript: {
    typeCheck: true,
    strict: true,
  },
  app: {
    head: {
      htmlAttrs: { lang: "en" },
      meta: [
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { name: "theme-color", content: "#fff8fb" },
      ],
      link: [{ rel: "canonical", href: "https://lime.is-a.dev/" }],
    },
  },
});
