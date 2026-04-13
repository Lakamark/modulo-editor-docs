---
layout: home

hero:
  name: ModuloEditor
  text: Modular, extensible and safe Markdown editor
  tagline: A flexible editor with plugin architecture, DOM slots, and textarea form integration.
  actions:
    - theme: brand
      text: Get Started
      link: /guide/getting-started
    - theme: alt
      text: GitHub
      link: https://github.com/lakamark/ModuloEditor

features:
  - title: Modular architecture
    details: Build your editor with composable parts and clear contracts.
  - title: Plugin system
    details: Extend the editor with toolbar buttons and custom behaviors.
  - title: Safe by default
    details: Use a markdown pipeline with sanitization and controlled rendering.
  - title: Form friendly
    details: Integrates with classic HTML forms through a hidden textarea bridge.
---
## Quick Example

```ts
import { ModuloEditor } from '@lakamark/modulo-editor';
import '@lakamark/modulo-editor/style.css';

ModuloEditor
  .create('[data-mo-editor]')
  .init();
```