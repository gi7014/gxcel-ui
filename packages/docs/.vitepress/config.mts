import { defineConfig } from 'vitepress'
import { useSideBar } from '../utils'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Gxcel-UI",
  description: "Gxcel 组件库",
  base: '/gxcel-ui/',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '主页', link: '/' },
      { text: '指南', link: '/guide/design' },
      { text: '组件', link: '/components/button' }
    ],

    sidebar: useSideBar(),

    socialLinks: [
      { icon: 'github', link: 'https://github.com/gi7014/gxcel-ui' }
    ],

    outline: {
      label: '内容'
    },

    lastUpdated: {
      text: '最后更新于'
    },

    editLink: {
      pattern: 'https://github.com/gi7014/gxcel-ui/edit/main/docs/:path',
      text: '在 GitHub 上编辑此页'
    },

    search: {
      provider: 'local'
    }
  }
})
