# Quick Start

This guide will help you create your first ModuloEditor instance.

## Create the HTML container

```html
<div id="editor"></div>
```

## Initialize the editor

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

## Listen for content changes

```ts
editor.on('content:change', ({ value, html }) => {
    console.log(value);
    console.log(html);
});
```

## Execute commands

```ts
editor.executeCommand('bold');
editor.executeCommand('italic');
editor.executeCommand('heading-1');
```

## Next Steps

* [Learn about Presets](./guide/presets.md)
* [Learn about Commands](./guide/commands.md)
* [Learn about Plugins](./guide/plugins.md)
* [Learn about Events](./guide/events.md)
* [Explore the API Reference](./api/index.md)
