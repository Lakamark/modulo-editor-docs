# Examples

This page shows different DOM structures supported by ModuloEditor.

You are free to adapt the layout as long as required slots are present.

## Minimal example

This is the smallest possible structure.

```html
<div data-mo-editor>
  <textarea data-mo-editor-input></textarea>
  <div data-mo-editor-preview></div>
</div>
```

## With toolbar

Adds a toolbar container.

```html
<div data-mo-editor>
  <div data-mo-editor-toolbar></div>

  <textarea data-mo-editor-input></textarea>
  <div data-mo-editor-preview></div>
</div>
```

## With layout wrapper

Adds a body wrapper for layout control.

```html
<div data-mo-editor>
  <div data-mo-editor-body>
    <textarea data-mo-editor-input></textarea>
    <div data-mo-editor-preview></div>
  </div>
</div>
```

## Full example

Complete editor layout.

```html
<div data-mo-editor>
  <div data-mo-editor-header></div>

  <div data-mo-editor-toolbar></div>

  <div data-mo-editor-body>
    <textarea data-mo-editor-input></textarea>
    <div data-mo-editor-preview></div>
  </div>

  <div data-mo-editor-footer></div>

  <div data-mo-editor-status></div>
</div>
```

All slots are optional except:

* `data-mo-editor-input`
* `data-mo-editor-preview`
