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
          {
            text: 'Introduction',
            link: '/guide/introduction'
          },
          {
            text: 'Installation',
            link: '/guide/installation'
          },
          {
            text: 'First Editor',
            link: '/guide/first-editor'
          }
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