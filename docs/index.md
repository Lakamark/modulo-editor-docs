# ModuloEditor

A lightweight and extensible Markdown editor built with TypeScript.

## Features

- Markdown editing
- Live HTML preview
- Toolbar plugins
- Event system
- Command system
- Framework-agnostic
- Fully customizable

## Quick Example

```ts
import { ModuloEditor, StarterKitPreset } from '@lakamark/modulo-editor';

const editor = new ModuloEditor('#editor', {
    presets: [
        new StarterKitPreset(),
    ],
});

editor.init();
```