require("dotenv").config();
const { MY_CLIENT_ID } = process.env;
const { MY_CLIENT_PASS } = process.env;
const { MY_API_KEY_WEATHER } = process.env;
export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "go-japan",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: "~/plugins/axios", ssr: false },
    { src: "~/plugins/vue-masonry", ssr: false },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    [
      "@nuxtjs/google-fonts",
      {
        families: {
          Oswald: true,
          Roboto: true,
          RopaSans: true,
          Abel: true,
        },
        display: "block",
        download: true,
        inject: true,
      },
    ],
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ["@nuxtjs/axios"],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
  env: {
    MY_CLIENT_ID,
    MY_CLIENT_PASS,
    MY_API_KEY_WEATHER,
  },
  router: {
    base: "/",
  },
};
