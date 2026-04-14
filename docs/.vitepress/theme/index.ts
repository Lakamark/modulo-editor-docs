import DefaultTheme from "vitepress/theme";
import BasicEditorDemo from "./components/BasicEditorDemo.vue";

export default {
    ...DefaultTheme,
    enhanceApp({ app }) {
        app.component("BasicEditorDemo", BasicEditorDemo);
    }
};