# fromTextarea
The `fromTextarea()` method initializes the editor from an existing textarea element.

The textarea becomes the source of truth and is used for form submission.

## Example
```ts
import { ModuloEditor } from "@lakamark/modulo-editor";

ModuloEditor
  .create("#content")
  .fromTextarea("#content")
  .build()
  .init();
```
## Html
```html
<textarea id="content" name="content"></textarea>
```
The editor UI will be created from this textarea.

## Signature
```ts
fromTextarea(input: string | HTMLTextAreaElement): ModuloEditorBuilder
```

## Parameters
| Name  | Type                            | Required | Description                  |
|-------|---------------------------------|----------|------------------------------|
| input | `string \| HTMLTextAreaElement` | Yes      | Textarea element or selector |

## Returns
| Type                  | Description          |
|-----------------------|----------------------|
| `ModuloEditorBuilder` | The builder instance |
