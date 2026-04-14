# Parser

The Markdown parser converts raw text into HTML.

It is the first step of the Markdown pipeline.

## Role

The parser receives editor input and generates HTML.

This HTML is then passed to the sanitizer before rendering.

## Example

```ts
import type { MarkdownParser } from "@lakamark/modulo-editor";

export class MyParser implements MarkdownParser {
  parse(input: string): string {
    return `<p>${input}</p>`;
  }
}
```

## Using custom parser

A custom parser can be used inside a Markdown processor.

```ts
const parser = new MyParser();
```

The processor will call the parser to transform Markdown into HTML.

## Typical usage

Parsers are useful when integrating libraries such as:

* marked
* markdown-it
* custom parsers

This keeps Markdown rendering fully customizable.
