# withMarkdown
The `withMarkdown()`method sets the Markdown processor used to render the preview.
This allows you to replace the default Markdown implementation.

## Example
```ts
import { ModuloEditor } from "@lakamark/modulo-editor";
import { DefaultMarkdownProcessor } from "@lakamark/modulo-editor";

ModuloEditor
  .create("[data-mo-editor]")
  .withMarkdown(new DefaultMarkdownProcessor())
  .build()
  .init();
```

## Custom processor
You can provide your own Markdown processor.
```ts
ModuloEditor
  .create("[data-mo-editor]")
  .withMarkdown(customMarkdownProcessor)
  .build()
  .init();
```
## Signature
```ts
withMarkdown(markdown: MarkdownProcessor): ModuloEditorBuilder
```
## Parameters
| Name     | Type                | Required | Description                               |
|----------|---------------------|----------|-------------------------------------------|
| markdown | `MarkdownProcessor` | Yes      | Markdown processor used to render preview |

## Returns
| Type                  | Description          |
|-----------------------|----------------------|
| `ModuloEditorBuilder` | The builder instance |

## Notes
* The Markdown processor converts Markdown to HTML
* The output is rendered in the preview slot
* You can plug any Markdown engine (Marked, custom, etc.)