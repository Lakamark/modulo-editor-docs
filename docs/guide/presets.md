# Presets

Presets provide a convenient way to configure ModuloEditor.

A preset can register adapters, services, plugins, commands, or other editor features.

## Using a preset

```ts
import {
    ModuloEditor,
    StarterKitPreset
} from '@lakamark/modulo-editor';

const editor = new ModuloEditor('#editor', {
    presets: [
        new StarterKitPreset(),
    ],
});

editor.init();
```

## StarterKitPreset

The Starter Kit preset provides a complete editor setup.

It includes:

* Default editor adapters
* Markdown rendering
* HTML preview
* Textarea integration

```ts
new StarterKitPreset()
```

## DefaultEditorPreset

Provides the default editor implementation.

```ts
new DefaultEditorPreset()
```

## SafeMarkdownPreset

Adds HTML sanitization for safer rendering.

```ts
new SafeMarkdownPreset()
```

## MarkedPreset

Uses Marked to render Markdown into HTML.

```ts
new MarkedPreset()
```

## Combining presets

Multiple presets can be used together.

```ts
const editor = new ModuloEditor('#editor', {
    presets: [
        new DefaultEditorPreset(),
        new SafeMarkdownPreset(),
        new MarkedPreset(),
    ],
});
```

## Creating custom presets

You can create your own preset to encapsulate reusable editor configuration.

```ts
class CustomPreset {
    setup(editor) {
        // Configure editor services
    }
}
```
