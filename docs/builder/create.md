# create
The `create()` method initializes a new ModuloEditor builder.

It defines the root element used by the editor.

## Using a selector
You can pass a CSS selector.
```ts
import { ModuloEditor } from "@lakamark/modulo-editor";

ModuloEditor
  .create("[data-mo-editor]")
  .build()
  .init();
```
The selector must match a valid DOM element.

## Using an HTMLElement
You can also pass a DOM element directly.
```ts
const element = document.querySelector("[data-mo-editor]");

ModuloEditor
  .create(element)
  .build()
  .init();
```

## Root element
The root element represents the editor container.
```html
<div data-mo-editor>
    <div data-mo-editor-input></div>
    <div data-mo-editor-preview></div>
    <textarea id="content" name="content" hidden data-mo-editor-textarea></textarea>
</div>
```

## Errors
An error is thrown if the root element cannot be resolved.
```ts
ModuloEditor
  .create("#unknown") // throws
  .build()
  .init();
```

## Signature
```ts
ModuloEditor.create(root: string | HTMLElement): ModuloEditorBuilder
```

## Parameters
| Name | Type                    | Required | Description                     |
|------|-------------------------|----------|---------------------------------|
| root | `string \| HTMLElement` | Yes      | Root element used by the editor |

## Returns
| Type                  | Description            |
|-----------------------|------------------------|
| `ModuloEditorBuilder` | A new builder instance |

