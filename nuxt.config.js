export default {
  head: {
    title: "alibaba-task",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;400;600;800&display=swap",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css?family=Material+Icons|Material+Icons+Outlined",
      },
    ],
  },

  css: ["~/assets/css/main.scss"],

  plugins: ["@/plugins/numberFormatter.js"],
  components: true,
  buildModules: ["@nuxtjs/google-analytics"],
  googleAnalytics: {
    id: "YOUR_GOOGLE_ANALYTICS_ID",
  },
  modules: ["@nuxtjs/axios"],
  build: {},
  target: "static",
};
