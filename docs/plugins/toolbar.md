# Toolbar plugins

Toolbar plugins add buttons to the editor toolbar.

They use the `toolbar` slot provided by the Plugin API.

## Example

```ts
import type { EditorPlugin, EditorPluginApi } from "@lakamark/modulo-editor";

export class BoldToolbarPlugin implements EditorPlugin {
  mount(api: EditorPluginApi): void {
    const toolbar = api.slots.toolbar;

    if (!toolbar) {
      return;
    }

    const button = document.createElement("button");

    button.textContent = "Bold";

    button.onclick = () => {
      api.executeCommand("bold");
    };

    toolbar.appendChild(button);
  }

  destroy(): void {}
}
```

## Register plugin

```ts
ModuloEditor
  .create('[data-mo-editor]')
  .withPlugins([
    new BoldToolbarPlugin()
  ])
  .init();
```

## Requires toolbar slot

Toolbar plugins require the toolbar slot.

```html
<div data-mo-editor>
  <div data-mo-editor-toolbar></div>

  <textarea data-mo-editor-input></textarea>
  <div data-mo-editor-preview></div>
</div>
```

If the toolbar slot is not present, the plugin does nothing.
