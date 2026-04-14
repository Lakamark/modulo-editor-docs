import DefaultTheme from 'vitepress/theme'
import type { Theme } from 'vitepress'
import BasicDemo from './components/BasicDemo.vue'

export default {
    extends: DefaultTheme,
    enhanceApp({ app }) {
        app.component('BasicDemo', BasicDemo)
    }
} satisfies Theme