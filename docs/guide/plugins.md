# Plugins

Plugins extend the editor with reusable features.

They can add toolbar buttons, dropdowns, custom actions, or integrate with external services.

## Using Plugins

Plugins can be passed during editor creation.

```ts
import {
    ModuloEditor,
    StarterKitPreset,
    BoldToolbarPlugin,
    ItalicToolbarPlugin
} from '@lakamark/modulo-editor';

const editor = new ModuloEditor('#editor', {
    presets: [
        new StarterKitPreset(),
    ],
    plugins: [
        new BoldToolbarPlugin(),
        new ItalicToolbarPlugin(),
    ],
});

editor.init();
```

## Built-in Plugins

### BoldToolbarPlugin

Adds a toolbar button that executes the `bold` command.

```ts
new BoldToolbarPlugin()
```

### ItalicToolbarPlugin

Adds a toolbar button that executes the `italic` command.

```ts
new ItalicToolbarPlugin()
```

### HeadingToolbarPlugin

Adds a heading button to the toolbar.

```ts
new HeadingToolbarPlugin()
```

### HeadingDropdownPlugin

Adds a heading selection dropdown.

```ts
new HeadingDropdownPlugin()
```

### LinkToolbarPlugin

Adds a toolbar button for inserting links.

```ts
new LinkToolbarPlugin()
```

## Plugin Lifecycle

Plugins are initialized when the editor starts.

```ts
editor.init();
```

During initialization, each plugin receives a plugin API instance.

## Plugin API

Plugins receive access to editor functionality through the plugin API.

```ts
setup(api) {
    api.executeCommand('bold');
}
```

Available features include:

* Commands
* DOM slots
* CSS classes
* Command execution

## Creating a Custom Plugin

```ts
class MyPlugin {
    setup(api) {
        console.log('Plugin loaded');
    }
}
```

Register the plugin:

```ts
const editor = new ModuloEditor('#editor', {
    plugins: [
        new MyPlugin(),
    ],
});
```

## Accessing Editor Slots

Plugins can access editor DOM slots.

```ts
setup(api) {
    const toolbar = api.slots.toolbar;

    console.log(toolbar);
}
```

## Executing Commands

```ts
setup(api) {
    api.executeCommand('bold');
}
```
