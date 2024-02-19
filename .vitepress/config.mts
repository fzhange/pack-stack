import { defineConfig } from 'vitepress'
import sidebar from "./sidebar/index"

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "NestJs",
  description: "一个高效、可伸缩、可信赖的、渐进式NodeJs框架",
  ignoreDeadLinks: true,
  base:"/nestJs-docs/",
  appearance:"dark",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Documentation', link: '/introduction' }
    ],
    sidebar,
    socialLinks: [
      { icon: 'github', link: 'https://github.com/fzhange/nestJs-docs' }
    ]
  }
})
