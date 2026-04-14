# Slots

ModuloEditor uses `data-mo-editor-*` attributes to identify editor sections.

Each attribute represents a slot that can be used to build your layout.

## Required slots

These slots must exist for the editor to work.

| Slot                     | Description          |
|--------------------------|----------------------|
| `data-mo-editor-input`   | Editor input element |
| `data-mo-editor-preview` | Preview container    |

## Optional slots

These slots are optional and only used if present.

| Slot                     | Description       |
|--------------------------|-------------------|
| `data-mo-editor-toolbar` | Toolbar container |
| `data-mo-editor-header`  | Header container  |
| `data-mo-editor-footer`  | Footer container  |
| `data-mo-editor-status`  | Status container  |
| `data-mo-editor-body`    | Layout wrapper    |

## Example

```html
<div data-mo-editor>
  <div data-mo-editor-toolbar></div>

  <div data-mo-editor-body>
    <textarea data-mo-editor-input></textarea>
    <div data-mo-editor-preview></div>
  </div>

  <div data-mo-editor-status></div>
</div>
```

You are free to omit any optional slot.
