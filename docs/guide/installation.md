# Installation

Install ModuloEditor using your package manager.

## npm

```bash
npm install @lakamark/modulo-editor
```

## Import

```ts
import { ModuloEditor } from '@lakamark/modulo-editor';
import '@lakamark/modulo-editor/style.css';
```

## Basic usage

```ts
import { ModuloEditor } from '@lakamark/modulo-editor';
import '@lakamark/modulo-editor/style.css';

ModuloEditor
  .create('[data-mo-editor]')
  .init();
```

## Default styles

ModuloEditor provides minimal base styles.

These styles are optional and can be fully overridden.

```ts
import '@lakamark/modulo-editor/style.css';
```