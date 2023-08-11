// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      htmlAttrs: {
        version: process.env.npm_package_version,
        lang: 'zh-Hant-TW'
      }
    }
  },
  runtimeConfig: {
    public: {
      apiUrl: ''
    }
  },
  modules: ['@nuxtjs/tailwindcss'],
  // css: ['@/assets/style/all.scss']
  // 如果需要在 .vue檔案下面寫我額外的 scss 這樣就不需要 import
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "@/assets/style/all.scss";'
        }
      }
    }
  }
});
