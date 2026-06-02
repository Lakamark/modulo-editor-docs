import { defineConfig } from 'vitepress';

export default defineConfig({
  srcDir: 'docs',
  title: 'ModuloEditor',
  description: 'Official ModuloEditor documentation',
  base: '/modulo-editor-docs/',

  themeConfig: {
    nav: [
      {
        text: 'Guide',
        link: '/quick-start'
      },
      {
        text: 'GitHub',
        link: 'https://github.com/lakamark/ModuloEditor'
      }
    ],

    sidebar: [
      {
        text: 'Getting Started',
        items: [
          { text: 'Installation', link: '/installation' },
          { text: 'Quick Start', link: '/quick-start' },
        ]
      },
      {
        text: 'Guide',
        items: [
          { text: 'DOM Initializers', link: '/guide/dom-initializers' },
          { text: 'DOM Structure', link: '/guide/dom-structure' },
          { text: 'Presets', link: '/guide/presets' },
          { text: 'Commands', link: '/guide/commands' },
          { text: 'Plugins', link: '/guide/plugins' },
          { text: 'Events', link: '/guide/events' },
        ]
      },
      {
        text: 'Examples',
        items: [
          { text: 'Basic Editor', link: '/examples/basic-editor' },
          { text: 'Custom Toolbar', link: '/examples/custom-toolbar' },
          { text: 'Asset Upload', link: '/examples/asset-upload' },
          { text: 'Sync Scroll', link: '/examples/sync-scroll' },
        ]
      },
      {
        text: 'API Reference',
        items: [
          { text: 'Overview', link: '/api/' },
          { text: 'ModuloEditor', link: '/api/modulo-editor' },
          { text: 'Commands', link: '/api/commands' },
          { text: 'Plugins', link: '/api/plugins' },
          { text: 'Events', link: '/api/events' },
          { text: 'Presets', link: '/api/presets' },
          { text: 'DOM', link: '/api/dom' },
          { text: 'Types', link: '/api/types' }
        ]
      }
    ],

    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/lakamark/ModuloEditor'
      }
    ]
  }
});