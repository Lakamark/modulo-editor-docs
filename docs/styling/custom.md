# Custom styles

ModuloEditor is fully customizable using CSS.

You can style the editor in different ways depending on how the DOM is created.

## DOM attributes and CSS classes

ModuloEditor uses `data-mo-editor-*` attributes to identify editor elements.

These attributes are part of the DOM contract and are used by the editor to resolve its slots.

CSS classes are only used for styling.

This means:

* `data-*` attributes are used for editor behavior
* CSS classes are used for presentation
* ModuloEditor does not depend on class names for DOM resolution

## Adding your own classes

If you write the editor DOM manually, you can freely add your own classes.

```html
<div data-mo-editor class="editor">
  <div data-mo-editor-toolbar class="editor__toolbar"></div>

  <div data-mo-editor-body class="editor__body">
    <textarea data-mo-editor-input class="editor__input"></textarea>
    <div data-mo-editor-preview class="editor__preview"></div>
  </div>
</div>
```

This allows you to:

* use your own naming conventions
* integrate with an existing design system
* apply utility classes
* create custom themes

## Customizing generated classes

If you use the `DefaultEditorDomInitializer`, the generated DOM can also receive CSS classes.

These classes are applied for presentation only and can be customized through initializer options.

```ts
const domInitializer = new DefaultEditorDomInitializer({
  classes: {
    root: "editor",
    header: "editor__header",
    toolbar: "editor__toolbar",
    body: "editor__body",
    input: "editor__input",
    preview: "editor__preview",
    footer: "editor__footer",
    status: "editor__status",
    textarea: "editor__textarea"
  }
});
```

This allows the generated markup to match your own CSS architecture.

## Important

Changing class names does not affect how ModuloEditor resolves DOM elements.

The editor relies on `data-mo-editor-*` attributes, not on CSS classes.

When using the default DOM initializer, classes are optional presentation helpers layered on top of the DOM attributes.
