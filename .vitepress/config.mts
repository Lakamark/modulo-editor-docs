import { defineConfig } from 'vitepress';

export default defineConfig({
  srcDir: 'docs',

  title: 'ModuloEditor',
  description: 'Official ModuloEditor documentation',

  themeConfig: {
    nav: [
      {
        text: 'Guide',
        link: '/guide/getting-started'
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
          { text: 'Introduction', link: '/' },
          { text: 'Installation', link: '/installation' },
          { text: 'Quick Start', link: '/quick-start' },
        ]
      },
      {
        text: 'Guide',
        items: [
          { text: 'Presets', link: '/guide/presets' },
          { text: 'Commands', link: '/guide/commands' },
          { text: 'Plugins', link: '/guide/plugins' },
          { text: 'Events', link: '/guide/events' },
          { text: 'DOM Structure', link: '/guide/dom' },
        ]
      },
      {
        text: 'Examples',
        items: [
          { text: 'Basic Editor', link: '/examples/basic-editor' },
          { text: 'Custom Toolbar', link: '/examples/custom-toolbar' },
          { text: 'Image Upload', link: '/examples/image-upload' },
          { text: 'Sync Scroll', link: '/examples/sync-scroll' },
        ]
      },
      {
        text: 'API Reference',
        items: [
          { text: 'ModuloEditor', link: '/api/modulo-editor' },
          { text: 'Commands', link: '/api/commands' },
          { text: 'Plugins', link: '/api/plugins' },
          { text: 'Events', link: '/api/events' },
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