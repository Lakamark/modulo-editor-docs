---
prev: false
next: false
---
# Builder Overview
ModuloEditor provides a builder API to configure the editor in a modular and extensible way.

The builder allows you to customize each part of the editor independently.

## Basic Usage
```ts
import { ModuloEditor } from "@lakamark/modulo-editor";

ModuloEditor
    .create("[data-mo-editor]")
    .build()
    .init();
```
This is equivalent to using the default configuration.

## Custom configuration
Each part of the editor can be configured using the builder.
```ts
ModuloEditor
    .create("[data-mo-editor]")
    .withInput(inputAdapter)
    .withOutput(outputAdapter)
    .withMarkdown(markdownProcessor)
    .withPlugins([
        pluginA,
        pluginB
    ])
    .build()
    .init();
```
## Builder philosophy

The builder follows a modular architecture:

* Input adapter handles user interactions
* Output adapter renders preview
* Markdown processor converts Markdown to HTML
* Plugins extend editor behavior
* DOM initializer generates editor structure

Each part can be replaced independently.

## Fluent API
The builder uses a fluent API:
```ts
ModuloEditor
    .create(root)
    .withInput(inputAdapter)
    .withOutput(outputAdapter)
    .withMarkdown(markdownProcessor)
    .withPlugins([
        pluginA,
        pluginB
    ])
    .build()
    .init();
```

## Build step
The `build()` method finalizes the configuration and returns the editor instance.
```ts
const editor = ModuloEditor
  .create("[data-mo-editor]")
  .build();

editor.init();
```

## Default configuration
If no configuration is provided, ModuloEditor uses:

* Default DOM resolver
* Default textarea bridge
* Default Markdown processor (basic)
* No plugins

This makes the editor work out-of-the-box while remaining fully customizable.