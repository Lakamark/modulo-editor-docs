import { h } from 'vue'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import './style.css'

import HomePage from './components/HomePage.vue'
import Version from './components/VersionBadge.vue'
import MinimalDemoModuloEditor from "./components/demos/MinimalDemoModuloEditor.vue";
import BasicEditorDemo from "./components/demos/BasicEditorDemo.vue";
import CustomToolbarDemo from "./components/demos/CustomToolbarDemo.vue";

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
    app.component('MinimalDemoModuloEditor', MinimalDemoModuloEditor)
    app.component('BasicEditorDemo', BasicEditorDemo)
    app.component('CustomToolbarDemo', CustomToolbarDemo)
  }
} satisfies Theme