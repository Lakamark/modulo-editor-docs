# Basic Usage

This example shows the minimal setup required to use ModuloEditor.

```html
<div class="mo-editor" data-mo-editor>
    <div class="mo-editor__header" data-mo-editor-header>
        <div class="mo-editor__toolbar" data-mo-editor-toolbar></div>
    </div>

    <div class="mo-editor__body" data-mo-editor-body>
        <div class="mo-editor__input" data-mo-editor-input></div>
        <div class="mo-editor__preview" data-mo-editor-preview></div>
    </div>

    <div class="mo-editor__footer" data-mo-editor-footer>
        <div class="mo-editor__status" data-mo-editor-status></div>
    </div>

    <textarea
        name="content"
        hidden
        data-mo-editor-textarea
    ></textarea>
</div>
```

## JavaScript
```ts
import { ModuloEditor } from '@lakamark/modulo-editor';
import '@lakamark/modulo-editor/style.css';

ModuloEditor
  .create('[data-mo-editor]')
  .init();
```

## Form submission
ModuloEditor works with classic HTML forms using a hidden textarea.
```html
<form method="post">
    <div data-mo-editor>
        ...
        <textarea
            name="content"
            hidden
            data-mo-editor-textarea
        ></textarea>
    </div>

    <button type="submit">Save</button>
</form>
```
## DOM slots

::: tip
ModuloEditor relies on `data-mo-editor-*` attributes to resolve DOM slots.

You can fully customize the markup while keeping these attributes.
:::