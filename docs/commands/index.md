---
prev: false
next: false
---
# Commands

Commands define editor actions.

They can be triggered by:

* toolbar buttons
* keyboard shortcuts
* plugins
* API calls

Commands are registered internally and can be executed by name.

## Example

```ts
api.executeCommand("bold");
```

This executes the `bold` command.

Commands receive a context object that allows them to modify the editor state.

## Built-in commands

ModuloEditor provides built-in commands such as:

* bold
* italic
* heading
* etc

These commands can be executed by plugins or UI components.

## Why commands

Commands help decouple:

* UI (buttons)
* behavior (editor logic)

This keeps the editor modular and extensible.
