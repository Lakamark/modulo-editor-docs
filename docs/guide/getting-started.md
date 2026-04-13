# Getting Started

ModuloEditor is a modular Markdown editor designed to be extensible and safe.

## Installation

```bash
npm install @lakamark/modulo-editor
```

## Example HTML Structure

```html
<div class="mo-editor" data-mo-editor>
    <!-- Header editor -->
    <div class="mo-editor__header" data-mo-editor-header>
        <div class="mo-editor__toolbar" data-mo-editor-toolbar></div>
    </div>

    <!-- Body editor -->
    <div class="mo-editor__body" data-mo-editor-body>
        <div class="mo-editor__input" data-mo-editor-input></div>
        <div class="mo-editor__preview" data-mo-editor-preview></div>
    </div>

    <!-- Footer editor -->
    <div class="mo-editor__footer" data-mo-editor-footer>
        <div class="mo-editor__status" data-mo-editor-status></div>
    </div>

    <!-- Hidden textarea for classic form submission -->
    <textarea id="content" name="content" hidden data-mo-editor-textarea></textarea>
</div>
```

## JavaScript

```ts
import { ModuloEditor } from '@lakamark/modulo-editor';

ModuloEditor
  .create('[data-mo-editor]')
  .init();
```

::: tip
ModuloEditor relies on `data-mo-editor-*` attributes to resolve DOM slots.

You are free to customize the markup as long as these attributes are preserved.
:::