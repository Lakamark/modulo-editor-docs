# Default preset

The default preset provides a safe and ready-to-use editor configuration.

It wires together:

* default input adapter
* default output adapter
* default DOM resolver
* default Markdown processor
* HTML sanitizer

## Security

The default preset uses [DOMPurify](https://github.com/cure53/DOMPurify)
to sanitize generated HTML and ensure safe preview rendering.
This prevents unsafe content such as:

* script injection
* malicious attributes
* unsafe HTML

This ensures preview rendering remains safe by default.

## Example

```ts
ModuloEditor
  .create('[data-mo-editor]')
  .usePreset(DefaultEditorPreset)
  .init();
```

## Why a default preset

The default preset allows you to start quickly with a secure configuration.

You can still override any part of the editor later using the builder.
