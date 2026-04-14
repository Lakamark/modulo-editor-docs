# Plugin API

Plugins receive an `EditorPluginApi` instance when mounted.

This API allows plugins to interact with the editor.

## Example

```ts
import type { EditorPlugin, EditorPluginApi } from "@lakamark/modulo-editor";

export class MyPlugin implements EditorPlugin {
  mount(api: EditorPluginApi): void {
    console.log(api);
  }

  destroy(): void {}
}
```

## Available properties

### commands

Provides access to the editor command registry.

```ts
api.commands.register(...)
api.commands.execute(...)
```

This allows plugins to register and execute commands.

### slots

Provides access to DOM slots.

```ts
api.slots.toolbar
api.slots.header
api.slots.footer
```

Slots may be `null` if not present in the DOM.

### executeCommand

Execute a command directly.

```ts
api.executeCommand("bold");
```

This is a shorthand for executing commands.

## Example

```ts
export class ToolbarPlugin implements EditorPlugin {
  mount(api: EditorPluginApi): void {
    const button = document.createElement("button");

    button.textContent = "Bold";

    button.onclick = () => {
      api.executeCommand("bold");
    };

    api.slots.toolbar?.appendChild(button);
  }

  destroy(): void {}
}
```
