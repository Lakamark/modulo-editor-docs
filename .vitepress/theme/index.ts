import { h } from 'vue'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import './style.css'

import HomePage from './components/HomePage.vue'
import Version from './components/VersionBadge.vue'

export default {
  extends: DefaultTheme,

  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      'sidebar-nav-before': () => h(Version)
    })
  },

  enhanceApp({ app }) {
    app.component('HomePage', HomePage)
    app.component('Version', Version)
  }
} satisfies Theme