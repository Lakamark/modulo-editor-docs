# Commands

Commands are reusable editor actions.

They can be executed manually, from toolbar buttons, keyboard shortcuts, or custom plugins.

## Executing a command

```ts
editor.executeCommand('bold');
```

## Checking if a command exists

```ts
if (editor.commands.has('bold')) {
    editor.executeCommand('bold');
}
```

## Built-in Commands

ModuloEditor includes several built-in commands.

### Bold

```ts
editor.executeCommand('bold');
```

Transforms:

```md
Hello
```

Into:

```md
**Hello**
```

### Italic

```ts
editor.executeCommand('italic');
```

Transforms:

```md
Hello
```

Into:

```md
*Hello*
```

### Headings

```ts
editor.executeCommand('heading-1');
editor.executeCommand('heading-2');
editor.executeCommand('heading-3');
editor.executeCommand('heading-4');
editor.executeCommand('heading-5');
editor.executeCommand('heading-6');
```

Example:

```md
Hello World
```

Becomes:

```md
# Hello World
```

## Registering Custom Commands

Custom commands can be registered during editor setup.

```ts
editor.commands.register('insert-date', {
    execute(editor) {
        const date = new Date().toISOString();

        editor.insert(date);
    }
});
```

## Executing Custom Commands

```ts
editor.executeCommand('insert-date');
```

## Commands in Plugins

Toolbar plugins typically execute commands.

```ts
api.executeCommand('bold');
```

This allows plugins to remain independent from the editor implementation.

## Command Events

When a command is executed, ModuloEditor emits an event.

```ts
editor.on('command:execute', ({ name }) => {
    console.log(name);
});
```
