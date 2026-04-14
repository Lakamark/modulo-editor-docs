# DOM Initializer
The `withDomInitializer()` method allows you to generate the editor DOM structure from an existing textarea.
This is useful when you want to start from a plain `<textarea>` without writing the editor markup manually.

## Example
```ts
import { ModuloEditor } from "@lakamark/modulo-editor";

ModuloEditor
  .create("#content")
  .fromTextarea("#content")
  .withDomInitializer(domInitializer)
  .build()
  .init();
```

## HTML
```html
<textarea id="content" name="content"></textarea>
```
The DOM initializer will transform this textarea into an editor structure.

## Signature
```ts
withDomInitializer(domInitializer: EditorDomInitializer): ModuloEditorBuilder
```
## Parameters
| Name           | Required | Type                   | Description                                                |
|----------------|----------|------------------------|------------------------------------------------------------|
| domInitializer | Yes      | `EditorDomInitializer` | Object responsible for generating the editor DOM structure |

## Returns
| Type                  | Description          |
|-----------------------|----------------------|
| `ModuloEditorBuilder` | The builder instance |

## Notes
* `fromTextarea()` is typically used together with`withDomInitializer()`
* The initializer is responsible for creating the editor root and returning the resolved elements
* This approach is useful for progressive enhancement of existing forms
