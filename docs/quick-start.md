# Quick Start

This guide will help you create your first ModuloEditor instance.

Before continuing, make sure ModuloEditor is installed in your project.

See the [Installation Guide](./installation).

## Create the HTML container
The surrounding HTML structure is entirely up to you.

ModuloEditor only requires:
- an existing textarea
- a DOM initializer
- a preset

With these three pieces, you already have a functional Markdown editor with a toolbar, live preview, and form synchronization.

```html
<form action="/" method="post">
    <label for="editor">My Content</label>
    <textarea id="editor">
        Hello! My name is ModuloEditor!
    </textarea>
    <button type="submit">Submit</button>
</form>
```

## Initialize your application

ModuloEditor provides a fluent API.

You can mount ModuloEditor on an existing textarea element in your HTML document.

```ts
import {
    DefaultEditorDomInitializer,
    ModuloEditorCore,
    StarterKitPreset
} from '@lakamark/modulo-editor';

const editor = ModuloEditorCore
    .create()
    .fromTextarea('#editor')
    .withDomInitializer(new DefaultEditorDomInitializer())
    .usePreset(new StarterKitPreset())
    .build();

editor.init();
```

## Event System
The core emits various events throughout its lifecycle.

For example, if you want to listen for a specific event and integrate your own workflow, you can do so as shown below.
```ts
editor.on('content:change', ({ value, html }) => {
    console.log(value);
    console.log(html);
});
```

## Execute Commands
You can execute commands to interact with the ModuloEditor core.

```ts
editor.executeCommand('bold');
editor.executeCommand('italic');
editor.executeCommand('heading-1');
```

## Next Steps

* [Learn about Presets](./guide/presets)
* [Learn about Commands](./guide/commands)
* [Learn about Plugins](./guide/plugins)
* [Learn about Events](./guide/events)
* [Explore the API Reference](./api/)
