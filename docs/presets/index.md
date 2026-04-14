---
prev: false
next: false
---

# Presets

Presets provide predefined editor configurations.

They allow you to quickly configure ModuloEditor without manually wiring all components.

A preset can define:

* input adapter
* output adapter
* Markdown processor
* plugins
* commands
* DOM resolver

## Example

```ts
ModuloEditor
  .create('[data-mo-editor]')
  .usePreset(DefaultEditorPreset)
  .init();
```

## Default behavior

ModuloEditor provides a default preset with a safe configuration.

The default preset includes:

* default DOM resolver
* default Markdown processor
* HTML sanitizer using [DOMPurify](https://github.com/cure53/DOMPurify)
* basic editor setup

This ensures safe HTML rendering out of the box.

## Why presets

Presets help:

* reduce boilerplate
* reuse configuration
* standardize editor setup
* provide ready-to-use configurations
* share editor setups

You can also create your own presets to customize the editor behavior.