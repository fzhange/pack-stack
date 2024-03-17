import { defineConfig } from 'vitepress'
import sidebar from "./sidebar/index"

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "pack-stack",
  description: "The Ultimate NX/Turbo Template Resource",
  ignoreDeadLinks: true,
  base:"/pack-stack/",
  appearance:"dark",
  locales: {
    root: {
      label: 'English',
      lang: 'en'
    },
    cn: {
      label: '简体中文',
      lang: 'cn', // optional, will be added  as `lang` attribute on `html` tag
      link: '/cn' // default /fr/ -- shows on navbar translations menu, can be external
    }
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'nx-vue-spark', link: '/nx-vue-spark/index' },
      { text: 'nx-vue-cosmopolis', link: '/nx-vue-cosmopolis/index' }
    ],
    sidebar,
    socialLinks: [
      { icon: 'github', link: 'https://github.com/fzhange/pack-stack' }
    ]
  }
})
