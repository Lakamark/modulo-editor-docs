# withPlugins
The `withPlugins()` method registers plugins that extend the editor behavior.
Plugins can add features such as toolbar buttons, keyboard shortcuts, or custom integrations.

## Example
```ts
import { ModuloEditor } from "@lakamark/modulo-editor";
import {
  BoldToolbarPlugin,
  ItalicToolbarPlugin
} from "@lakamark/modulo-editor";

ModuloEditor
  .create("[data-mo-editor]")
  .withPlugins([
    new BoldToolbarPlugin(),
    new ItalicToolbarPlugin()
  ])
  .build()
  .init();
```
## Signature
```ts
withPlugins(plugins: EditorPlugin[]): ModuloEditorBuilder
```

## Parameters
| Name    | Type             | Required | Description                 |
|---------|------------------|----------|-----------------------------|
| plugins | `EditorPlugin[]` | Yes      | List of plugins to register |

## Returns
| Type                  | Description          |
|-----------------------|----------------------|
| `ModuloEditorBuilder` | The builder instance |

## Notes
* Plugins are mounted when the editor is initialized
* Each plugin receives access to the editor through the plugin API
* Plugins can be combined to extend the editor behavior
