# Plugins

Plugins allow you to extend ModuloEditor without modifying the editor core.

A plugin can:

- add toolbar buttons
- execute commands
- listen to editor events
- interact with the editor API
- integrate custom workflows

## Built-in Plugins

ModuloEditor includes several built-in plugins that can be used directly or customized.

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

Adds toolbar buttons for Markdown headings.

```ts
new HeadingToolbarPlugin()
```

### HeadingDropdownPlugin

Adds a heading dropdown menu to the toolbar.

```ts
new HeadingDropdownPlugin()
```

### LinkToolbarPlugin

Adds a toolbar button for inserting Markdown links.

```ts
new LinkToolbarPlugin()
```

> Built-in plugins are regular plugins implemented using the same public plugin API available to library users.

## Customizing Built-in Plugins

Most built-in plugins accept configuration options.

For example, you can replace the default text label with a custom SVG icon.

```ts
const editor = ModuloEditorCore
    .create()
    .withDomInitializer(new DefaultEditorDomInitializer())
    .fromTextarea('#editor')
    .usePreset(new StarterKitPreset())
    .withPlugins([
        new BoldToolbarPlugin({
            content: '<svg></svg>',
        }),
    ])
    .build();
```

This allows you to:

- replace text labels with icons
- customize shortcuts
- adapt the toolbar to your design system

Example:

```ts
new BoldToolbarPlugin({
    content: '<svg></svg>',
    shortcut: 'Ctrl+B',
});
```

## Registering Plugins

Plugins can be registered through the editor builder.

```ts
const editor = ModuloEditorCore
    .create()
    .withDomInitializer(new DefaultEditorDomInitializer())
    .fromTextarea('#editor')
    .usePreset(new StarterKitPreset())
    .withPlugins([
        new BoldToolbarPlugin(),
        new ItalicToolbarPlugin(),
        new HeadingDropdownPlugin(),
    ])
    .build();
```

## Creating a Plugin

A plugin must implement the `EditorPlugin` interface.

```ts
import type {
    EditorPlugin,
    EditorPluginApi,
} from '@lakamark/modulo-editor';

export class HelloPlugin implements EditorPlugin {
    public setup(api: EditorPluginApi): void {
        console.log('Hello ModuloEditor');
    }
}
```

## Base Plugin Classes

ModuloEditor provides reusable base classes for common plugin patterns.

These classes help reduce boilerplate when building toolbar integrations.

### CommandButtonPlugin

Use `CommandButtonPlugin` to create a toolbar button that executes a command.

```ts
import { CommandButtonPlugin } from '@lakamark/modulo-editor';

export class BoldToolbarPlugin extends CommandButtonPlugin {
    public constructor() {
        super({
            pluginName: 'toolbar-bold',
            commandName: 'bold',
            content: 'Bold',
            shortcut: 'Ctrl+B',
        });
    }
}
```

### ToolbarDropdownPlugin

Use `ToolbarDropdownPlugin` to create a dropdown menu that executes commands.

```ts
import { ToolbarDropdownPlugin } from '@lakamark/modulo-editor';

export class HeadingDropdownPlugin extends ToolbarDropdownPlugin {
    public constructor() {
        super({
            pluginName: 'toolbar-heading',
            label: 'Heading',
            items: [
                { label: 'H1', commandName: 'heading-1', shortcut: 'Ctrl+1' },
                { label: 'H2', commandName: 'heading-2', shortcut: 'Ctrl+2' },
                { label: 'H3', commandName: 'heading-3', shortcut: 'Ctrl+3' },
                { label: 'H4', commandName: 'heading-4', shortcut: 'Ctrl+4' },
            ],
        });
    }
}
```

> Base plugin classes are optional.
>
> You can implement `EditorPlugin` directly whenever you need complete control over the plugin behavior.

## Plugin API

The `setup()` method receives an `EditorPluginApi` instance.

```ts
export interface EditorPlugin {
    setup(api: EditorPluginApi): void;
}
```

The plugin API provides access to editor services such as:

- commands
- events
- toolbar
- document state

## Listening to Events

Plugins can react to editor events.

```ts
export class LoggerPlugin implements EditorPlugin {
    public setup(api: EditorPluginApi): void {
        api.events.on('content:change', ({ value }) => {
            console.log(value);
        });
    }
}
```

## Plugin Conventions

### Naming

::: tip Good

- BoldToolbarPlugin
- WordCountPlugin
- AssetUploadPlugin

:::

::: warning Avoid

- ToolbarManager
- Helpers
- Utils

:::

### Single Responsibility

::: tip Good

- BoldToolbarPlugin
- ImageUploadPlugin
- WordCountPlugin

:::

::: warning Avoid

- EverythingPlugin

:::

### Setup

Plugin initialization should be performed inside the `setup()` method.

```ts
export class ExamplePlugin implements EditorPlugin {
    public setup(api: EditorPluginApi): void {
        // Plugin initialization.
    }
}
```

## Best Practices

::: tip Recommended

- Keep plugins focused on a single responsibility.
- Prefer editor events over direct DOM manipulation.
- Reuse existing commands whenever possible.
- Prefer extending base plugin classes when they already solve your use case.

:::

::: warning Avoid

- Coupling plugins together.
- Depending on internal editor implementation details.
- Manipulating editor internals directly.
- Reimplementing existing command logic unnecessarily.

:::