---
prev: false
next: false
---

# DOM Structure

ModuloEditor connects its components using `data-mo-editor-*` attributes.

This allows the editor to locate its different parts without enforcing a strict HTML layout.

You are free to structure the editor as you want, as long as required elements exist.

## Required elements

The editor requires two elements:

* `data-mo-editor-input`
* `data-mo-editor-preview`

These elements are used to:

* receive user input
* render the HTML preview

## Example

```html
<div data-mo-editor>
  <textarea data-mo-editor-input></textarea>
  <div data-mo-editor-preview></div>
</div>
```

This is the minimal structure required for ModuloEditor to work.
