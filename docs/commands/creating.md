# Creating a command

A command defines an editor action.

Commands are identified by a unique name and executed by the editor.

## Basic command

```ts
import type { EditorCommand, EditorCommandContext } from "@lakamark/modulo-editor";

export const MyCommand: EditorCommand = {
  name: "my-command",

  execute(context: EditorCommandContext): void {
    console.log("Command executed");
  }
};
```

## Register command

Commands can be registered using plugins.

```ts
export class MyPlugin implements EditorPlugin {
  mount(api: EditorPluginApi): void {
    api.commands.register(MyCommand);
  }

  destroy(): void {}
}
```

## Execute command

Commands can be executed using the API.

```ts
api.executeCommand("my-command");
```

## Command context

The `EditorCommandContext` provides access to editor state.

Commands use this context to modify the document.
