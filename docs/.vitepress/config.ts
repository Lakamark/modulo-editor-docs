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
                    { text: 'Installation', link: '/guide/installation' },
                    { text: 'Basic Usage', link: '/guide/basic-usage' },
                ]
            },
            {
                text: 'Builder',
                items: [
                    { text: 'Overview', link: '/builder/overview' },
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