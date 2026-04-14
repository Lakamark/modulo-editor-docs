# Getting Started
ModuloEditor is a modular Markdown editor designed to be extensible and safe.

```bash
npm install @lakamark/modulo-editor
```
# Import
```ts
import { ModuloEditor } from "@lakamark/modulo-editor";
import "@lakamark/modulo-editor/style.css"; // optional
```

```html
<form method="post">
  <div data-mo-editor>
    <div data-mo-editor-input></div>
    <div data-mo-editor-preview></div>

    <textarea
      id="content"
      name="content"
      hidden
      data-mo-editor-textarea
    ></textarea>
  </div>
</form>
```
# Basic usage
```ts
ModuloEditor
  .create("[data-mo-editor]")
  .init();
```