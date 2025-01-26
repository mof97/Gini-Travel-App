// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  ssr:false,
  modules: ['@nuxtjs/tailwindcss', "@nuxt/icon"],
  app: {
    head: {
      title: "Gini Traveling App",
      link: [
        {rel: "icon", type: 'image/png', href: "../meta-logo.png"},
      ],
    },
  },
  tailwindcss: {
    cssPath: ['~/assets/styles/index.css', { injectPosition: "first" }],
    exposeConfig: {
      level: 2
    },
    config: {
      theme:{
        content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
        container:{
          center:true,
          padding:"1rem"
        },
        extend:{
          colors:{
            primary:'#DB2529',
            secondary:"#202344",
          },
          fontFamily: {
            expo: ['expo', 'sans-serif'],
          },
          fontWeight: {
            light: 300,
            medium: 500,
            book: 400,
            bold: 700,
          },
        }

      }
    },
    viewer: true,
  },
})