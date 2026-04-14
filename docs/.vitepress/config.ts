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
                    { text: 'Overview', link: '/builder/' },
                    { text: 'create()', link: '/builder/create' },
                    { text: 'fromTextarea()', link: '/builder/from-textarea' },
                    { text: 'withDomInitializer()', link: '/builder/dom-initializer' },
                    { text: 'withPlugins()', link: '/builder/with-plugins' },
                    { text: 'withMarkdown()', link: '/builder/with-markdown' },
                    { text: 'build()', link: '/builder/build' },
                ],
            },
            {
                text: 'DOM Structure',
                items: [
                    { text: 'Overview', link: '/dom/' },
                    { text: 'Slots', link: '/dom/slots' },
                    { text: 'Examples', link: '/dom/examples' },
                    { text: 'fromTextarea()', link: '/dom/from-textarea' },
                ]
            },
            {
                text: 'Plugins',
                items: [
                    { text: 'Overview', link: '/plugins/' },
                    { text: 'Creating a plugin', link: '/plugins/creating' },
                    { text: 'Plugin API', link: '/plugins/api' },
                    { text: 'Toolbar plugins', link: '/plugins/toolbar' },
                ]
            },
            {
                text: 'Commands',
                items: [
                    { text: 'Overview', link: '/commands/' },
                    { text: 'Creating a command', link: '/commands/creating' },
                    { text: 'Using commands', link: '/commands/using' },
                ]
            },
            {
                text: 'Markdown',
                items: [
                    {text: 'Overview', link: '/markdown/'},
                    {text: 'Processor', link: '/markdown/processor'},
                    {text: 'Parser', link: '/markdown/parser'},
                    {text: 'Sanitizer', link: '/markdown/sanitizer'},
                ]
            },
            {
                text: 'Presets',
                items: [
                    { text: 'Overview', link: '/presets/' },
                    { text: 'Default preset', link: '/presets/default' },
                    { text: 'Custom preset', link: '/presets/custom' },
                ]
            },
            {
                text: 'Styling',
                items: [
                    { text: 'Overview', link: '/styling/' },
                    { text: 'Default CSS', link: '/styling/default' },
                    { text: 'Custom CSS', link: '/styling/custom' },
                ]
            },
            {
                text: 'Textarea',
                items: [
                    { text: 'Overview', link: '/textarea/' },
                    { text: 'Default behavior', link: '/textarea/default' },
                ]
            }
        ],
        socialLinks: [
            { icon: 'github', link: 'https://github.com/lakamark/ModuloEditor' },
        ]
    }
});