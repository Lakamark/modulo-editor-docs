# Events

ModuloEditor includes a lightweight event system that allows you to react to editor actions.

## Listening to Events

Use the `on()` method to subscribe to an event.

```ts
editor.on('editor:init', () => {
    console.log('Editor is ready');
});
```

The `on()` method returns an unsubscribe function.

```ts
const unsubscribe = editor.on('editor:init', () => {
    console.log('Editor is ready');
});

unsubscribe();
```

## Lifecycle Events

### editor:before-init

Emitted before the editor initialization process begins.

```ts
editor.on('editor:before-init', () => {
    console.log('Initializing editor');
});
```

### editor:init

Emitted when the editor is fully initialized.

```ts
editor.on('editor:init', () => {
    console.log('Editor is ready');
});
```

### editor:before-destroy

Emitted before the editor is destroyed.

```ts
editor.on('editor:before-destroy', () => {
    console.log('Destroying editor');
});
```

### editor:destroy

Emitted after the editor has been destroyed.

```ts
editor.on('editor:destroy', () => {
    console.log('Editor destroyed');
});
```

## Content Events

### content:change

Emitted whenever the editor content changes.

```ts
editor.on('content:change', ({ value, html, source }) => {
    console.log(value);
    console.log(html);
    console.log(source);
});
```

Payload:

```ts
{
    value: string;
    html: string;
    source: string;
}
```

## Command Events

### command:execute

Emitted whenever a command is executed.

```ts
editor.on('command:execute', ({ name }) => {
    console.log(name);
});
```

Payload:

```ts
{
    name: string;
}
```

## Custom Events

You can emit your own events.

```ts
editor.emit('custom:event', {
    message: 'Hello World',
});
```

And listen for them.

```ts
editor.on('custom:event', ({ message }) => {
    console.log(message);
});
```

## Example

Monitor editor activity.

```ts
editor.on('editor:init', () => {
    console.log('Editor ready');
});

editor.on('content:change', ({ value }) => {
    console.log(value);
});

editor.on('command:execute', ({ name }) => {
    console.log(`Command executed: ${name}`);
});
```
