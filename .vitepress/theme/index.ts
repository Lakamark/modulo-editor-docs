import { h } from 'vue'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import './style.css'

import HomePage from './components/HomePage.vue'
import Version from './components/VersionBadge.vue'
import MinimalDemoModuloEditor from "./components/demos/MinimalDemoModuloEditor.vue";
import BasicEditorExample from "./examples/BasicEditorExample.vue";
import CustomToolbarExample from "./examples/CustomToolbarExample.vue";
import AssetUploadExample from "./examples/AssetUploadExample.vue";

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
    app.component('BasicEditorExample', BasicEditorExample)
    app.component('CustomToolbarExample', CustomToolbarExample)
    app.component('AssetUploadExample', AssetUploadExample)
  }
} satisfies Theme