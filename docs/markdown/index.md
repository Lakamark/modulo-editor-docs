---
prev: false
next: false
---

# Markdown

ModuloEditor converts editor content to HTML using a Markdown processor.

The Markdown system is fully modular and composed of three parts:

* Markdown processor
* Markdown parser
* HTML sanitizer

This architecture allows you to customize how content is transformed and rendered.

## Example

```ts
ModuloEditor
  .create('[data-mo-editor]')
  .withMarkdown(markdownProcessor)
  .init();
```

## Default behavior

By default, ModuloEditor uses:

* a Markdown parser
* an HTML sanitizer
* a processor combining both

This ensures safe HTML rendering.
