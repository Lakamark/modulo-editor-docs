# Processor

The Markdown processor is responsible for converting editor content into safe HTML.

It acts as the main entry point of the Markdown pipeline.

## Role

The processor receives raw editor content and returns HTML that can be rendered in the preview.

It usually coordinates:

* a parser
* a sanitizer

## Example

```ts
ModuloEditor
  .create('[data-mo-editor]')
  .withMarkdown(markdownProcessor)
  .init();
```

## Pipeline

A typical processor flow looks like this:

1. parse Markdown input
2. generate HTML
3. sanitize HTML output
4. render the final result

## Why it matters

The processor keeps Markdown rendering modular.

You can replace the whole processor with your own implementation if you need custom behavior.
