---
prev: false
next: false
---
# Textarea integration

ModuloEditor can integrate with existing `<textarea>` elements.

This allows the editor to work with traditional HTML forms.

The textarea remains the source of truth for form submission.

## Example

```ts
ModuloEditor
  .fromTextarea("#content")
  .init();
```

The editor will enhance the textarea while keeping it for form submission.

## Why textarea integration

This approach allows:

* classic form submission
* server-side rendering compatibility
* progressive enhancement
* no JavaScript fallback

The original textarea is preserved and synchronized with the editor.
