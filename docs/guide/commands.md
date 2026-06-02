# Commands

Commands are reusable actions that can modify editor content.

They provide a centralized and reusable way to implement formatting features such as bold, italic, headings, links, and custom editor behaviors.

Toolbar buttons, keyboard shortcuts, plugins, and external integrations can all execute the same command implementation.

## Executing Commands
Commands can be executed through the editor instance.

```ts
editor.executeCommand('bold');
```

## Built-in Commands

ModuloEditor provides several built-in command classes.

::: tip

When using the official toolbar plugins, built-in commands are usually registered automatically by the plugin.

Manual registration is only required when using commands without their associated plugin.

:::


| Command   | Description                    |
|-----------|--------------------------------|
| bold      | Toggle bold formatting         |
| italic    | Toggle italic formatting       |
| link      | Insert or edit a Markdown link |
| heading-1 | Convert current line to H1     |
| heading-2 | Convert current line to H2     |
| heading-3 | Convert current line to H3     |
| heading-4 | Convert current line to H4     |
| heading-5 | Convert current line to H5     |
| heading-6 | Convert current line to H6     |

## Listen for Command Execution
Commands emit events through the editor event system.

```ts
editor.on('command:execute', ({ name }) => {
    console.log(`Executed command: ${name}`);
});
```

## Creating a Custom Command
Commands implement the `EditorCommand` interface.

```ts
import {
    EditorCommand,
    EditorCommandContext,
} from '@lakamark/modulo-editor';

export class AppendSignatureCommand implements EditorCommand {

    public readonly name = 'append-signature';

    public execute(context: EditorCommandContext): void {
        context.input.setValue(
            `${context.state.value}\n\n— ModuloEditor`
        );
    }
}
```

## Register a Command
Custom commands must be registered before they can be executed.

```ts
import {ModuloEditorCore} from "@lakamark/modulo-editor";

const editor = ModuloEditorCore
    .create()
    .withCommands([
        new AppendSignatureCommand()
    ])
    .build();
```

## Execute a Command

Once registered, a command can be executed programmatically.

```ts
editor.executeCommand('append-signature');
```

## Complete Example

```ts
import {
    EditorCommand,
    EditorCommandContext,
    ModuloEditorCore,
} from '@lakamark/modulo-editor';

class AppendSignatureCommand implements EditorCommand {

    public readonly name = 'append-signature';

    public execute(context: EditorCommandContext): void {
        context.input.setValue(
            `${context.state.value}\n\n— ModuloEditor`
        );
    }
}

const editor = ModuloEditorCore
    .create()
    .withCommands([
        new AppendSignatureCommand()
    ])
    .build();

editor.init();

editor.executeCommand('append-signature');
```

## Commands and Plugins

Plugins can execute commands through the plugin API.

This is the recommended way to modify editor content from a plugin.

```ts
import {
    EditorPlugin,
    EditorPluginApi
} from "@lakamark/modulo-editor";

export class BoldToolbarPlugin implements EditorPlugin {

    public setup(api: EditorPluginApi): void {
        const button = document.createElement('button');

        button.addEventListener('click', () => {
            api.executeCommand('bold');
        });

        api.toolbar.appendChild(button);
    }
}
```

### Custom Shortcuts

Built-in plugins may expose shortcut configuration options.

```ts
const editor = ModuloEditorCore
    .create()
    .withPlugins([
        new BoldToolbarPlugin({
            shortcut: 'Ctrl+1'
        })
    ])
    .build();
```

::: tip

Commands define the behavior.

Plugins, toolbar buttons, keyboard shortcuts, dropdown menus, and external integrations are simply different ways to trigger that behavior.

Plugins should generally execute commands instead of modifying editor content directly.

This keeps editor behavior centralized, reusable, and consistent across the editor.

:::

## When to Create a Command

Commands are recommended whenever a behavior can be reused from multiple places.

Examples:

- Toolbar buttons
- Keyboard shortcuts
- Dropdown menus
- Plugins
- External integrations

If the same action may be triggered from more than one place, consider implementing it as a command.

## Command Naming

Use kebab-case for command names.

::: tip Good

- bold
- insert-image
- append-signature

:::

::: warning Avoid

- BoldCommand
- InsertImage
- appendSignature

:::