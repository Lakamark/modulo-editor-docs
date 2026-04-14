---
prev: false
next: false
---
# Plugins

Plugins extend ModuloEditor with additional features.

They can add:

* toolbar buttons
* keyboard shortcuts
* UI components
* commands
* behaviors

Plugins are registered using the builder.

## Example

```ts
ModuloEditor
  .create('[data-mo-editor]')
  .withPlugins([
    new BoldToolbarPlugin(),
    new ItalicToolbarPlugin()
  ])
  .init();
```

Plugins are mounted when the editor initializes and destroyed when the editor is destroyed.

This keeps the editor modular and extensible.