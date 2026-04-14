import { defineConfig } from 'vitepress';

export default defineConfig({
    title: 'ModuloEditor',
    description: 'Modular, extensible and safe Markdown editor',
    base: '/modulo-editor-docs/',

    themeConfig: {
        nav: [
            { text: 'Guide', link: '/guide/getting-started' },
            { text: 'API', link: '/api/modulo-editor' },
            { text: 'GitHub', link: 'https://github.com/lakamark/ModuloEditor' },
        ],
        sidebar: [
            {
                text: 'Guide',
                items: [
                    { text: 'Getting Started', link: '/guide/getting-started' },
                    { text: 'Basic Usage', link: '/guide/basic-usage' },
                ]
            },
            {
                text: 'Builder',
                items: [
                    { text: 'Overview', link: '/builder/overview' },
                    { text: 'create()', link: '/builder/create' },
                    { text: 'fromTextarea()', link: '/builder/from-textarea' },
                    { text: 'withDomInitializer()', link: '/builder/dom-initializer' },
                    { text: 'withPlugins()', link: '/builder/with-plugins' },
                    { text: 'withMarkdown()', link: '/builder/with-markdown' },
                    { text: 'build()', link: '/builder/build' },
                ],
            },
            {
                text: 'API',
                items: [
                    { text: 'ModuloEditor', link: '/api/modulo-editor' },
                ]
            }
        ],
        socialLinks: [
            { icon: 'github', link: 'https://github.com/lakamark/ModuloEditor' },
        ]
    }
});