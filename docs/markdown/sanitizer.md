# Sanitizer

The HTML sanitizer ensures that generated HTML is safe to render.

It is the last step of the Markdown pipeline.

## Role

The sanitizer receives HTML from the parser and removes unsafe content.

This prevents issues such as:

* script injection
* unsafe attributes
* malicious HTML

## Example

```ts
import type { HtmlSanitizer } from "@lakamark/modulo-editor";

export class MySanitizer implements HtmlSanitizer {
  sanitize(html: string): string {
    return html;
  }
}
```

## Using custom sanitizer

A custom sanitizer can be used inside a Markdown processor.

```ts
const sanitizer = new MySanitizer();
```

## Default behavior

ModuloEditor provides a default sanitizer implementation to ensure safe HTML rendering.

This sanitizer is used by the default Markdown processor.

## Why sanitizer matters

Rendering HTML without sanitizing can lead to security issues.

The sanitizer ensures that preview output remains safe.
