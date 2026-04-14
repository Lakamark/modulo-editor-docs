# Creating a plugin

A plugin extends ModuloEditor by implementing the `EditorPlugin` interface.

Plugins are mounted when the editor initializes and destroyed when the editor is destroyed.

## Basic plugin

```ts
import type { EditorPlugin, EditorPluginApi } from "@lakamark/modulo-editor";

export class MyPlugin implements EditorPlugin {
  mount(api: EditorPluginApi): void {
    console.log("Plugin mounted");
  }

  destroy(): void {
    console.log("Plugin destroyed");
  }
}
```

## Register plugin

Plugins are registered using the builder.

```ts
ModuloEditor
  .create('[data-mo-editor]')
  .withPlugins([
    new MyPlugin()
  ])
  .init();
```

## Plugin lifecycle

Plugins follow a simple lifecycle:

1. `mount()` is called when the editor initializes
2. `destroy()` is called when the editor is destroyed

This ensures plugins can safely attach and cleanup resources.

## Access editor API

Plugins receive the `EditorPluginApi` in `mount()`.

This API allows plugins to interact with the editor.
