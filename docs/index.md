---
layout: home

hero:
  name: ModuloEditor
  text: Lightweight Markdown Editor
  tagline: Framework-agnostic, extensible, and TypeScript-first.
  actions:
    - theme: brand
      text: Quick Start
      link: /quick-start

    - theme: alt
      text: GitHub
      link: https://github.com/lakamark/ModuloEditor

features:
  - title: Quick Start
    details: Create your first editor instance in minutes.

  - title: Commands
    details: Execute reusable editor actions such as bold, italic, and headings.

  - title: Plugins
    details: Extend the editor with toolbar buttons, dropdowns, and custom integrations.

  - title: Events
    details: React to editor lifecycle, content changes, and commands.

  - title: Presets
    details: Build editors quickly using reusable configurations.
    
  - title: Framework Agnostic
    details: Designed to work with vanilla JavaScript and custom framework wrappers.
---
::: warning Documentation in progress
ModuloEditor is still in active development.
This documentation is still being written. Some pages may be incomplete or updated frequently.
:::

<Version />

## Quick Example
Start from an existing textarea. ModuloEditor handles the editor layout, live preview, and form synchronization for you.

```html
<textarea id="editor"></textarea>
```

```ts
import {
    DefaultEditorDomInitializer,
    ModuloEditorCore,
    StarterKitPreset
} from "@lakamark/modulo-editor";

const editor = ModuloEditorCore
    .create()
    .withDomInitializer(new DefaultEditorDomInitializer())
    .fromTextarea('#editor')
    .usePreset(new StarterKitPreset())
    .build();

editor.init();
```
Ready to build your first editor?

[Get Started →](/installation)

## Live Playground

Explore ModuloEditor directly in your browser using the included StarterKitPreset.

<ClientOnly>
  <MinimalDemoModuloEditor />
</ClientOnly>