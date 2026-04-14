import DefaultTheme from "vitepress/theme";
import type { Theme } from "vitepress";
import EditorPlayground from "./components/EditorPlayground.vue";

const theme: Theme = {
    extends: DefaultTheme,
    enhanceApp({ app }) {
        app.component("EditorPlayground", EditorPlayground);
    }
};

export default theme;