import { defineConfig } from 'vitepress'
import sidebar from "./sidebar/index"

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "pack-stack",
  description: "The Ultimate NX/Turbo Template Resource",
  ignoreDeadLinks: true,
  base:"/pack-stack/",
  appearance:"dark",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Documentation', link: '/introduction' }
    ],
    sidebar,
    socialLinks: [
      { icon: 'github', link: 'https://github.com/fzhange/pack-stack' }
    ]
  }
})
