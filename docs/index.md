---
layout: home

hero:
  name: ModuloEditor
  text: Modular, extensible and safe Markdown editor
  tagline:  Version 0.5.0-alpha.1
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
  - title: React Integration
    details: Lightweight React wrapper with presets, plugins and form support.
---

## Quick Example

```ts
import { ModuloEditor } from '@lakamark/modulo-editor';
import '@lakamark/modulo-editor/style.css';

ModuloEditor
  .create('[data-mo-editor]')
  .init();
```

## React Wrapper

> New in `0.5.0-alpha.1`

Use the lightweight React integration layer for React-based applications.

```tsx
import { ModuloEditor } from '@lakamark/modulo-editor';

export function App() {
  return (
    <ModuloEditor value="# Hello World" />
  );
}
```