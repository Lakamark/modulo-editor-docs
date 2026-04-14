# fromTextarea()

The `fromTextarea()` method allows ModuloEditor to start from an existing `<textarea>` element.

This is useful when working with traditional forms.

## Why use it

`fromTextarea()` helps integrate the editor into an existing form without changing your original form structure.

It allows ModuloEditor to use a textarea as the source element and build the surrounding editor.

## Example

```ts
ModuloEditor
  .fromTextarea("#content")
  .withDomInitializer(domInitializer)
  .build()
  .init();
```

## How it works

When `fromTextarea()` is used, the builder first resolves the textarea element.

If a DOM initializer is provided, it can generate or prepare the editor root from that textarea.

The editor then uses:

* the initialized root element
* the textarea linked to that root

## Notes

* `fromTextarea()` requires a valid `<textarea>`
* a selector must resolve to a textarea element
* if no matching textarea is found, an error is thrown
* if the matched element is not a textarea, an error is thrown

## Typical use case

This pattern is useful when you want to progressively enhance a classic form field into a richer editor interface.
