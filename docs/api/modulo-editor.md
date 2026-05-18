# ModuloEditor API

API reference for the main editor entrypoint.

## Creating an editor

```ts
import { ModuloEditor } from '@lakamark/modulo-editor';

const editor = ModuloEditor
    .create('[data-mo-editor]')
    .build();

editor.init();
```

## Static Methods

### `ModuloEditor.create()`

Creates a new editor builder instance.

```ts
ModuloEditor.create(
    root?: string | HTMLElement
)
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `root` | `string \| HTMLElement` | Editor root element or selector |

#### Returns

`ModuloEditorBuilder`

## Instance Methods

### `init()`

Initializes the editor lifecycle.

```ts
editor.init();
```

### `destroy()`

Destroys the editor instance and cleans listeners/plugins.

```ts
editor.destroy();
```

### `setValue()`

Sets the editor raw markdown value.

```ts
editor.setValue('# Hello');
```

### `getValue()`

Returns the current editor raw value.

```ts
const value = editor.getValue();
```

### `onChange()`

Registers a change listener.

```ts
editor.onChange((value) => {
    console.log(value);
});
```

Returns an unsubscribe function.

## React

For React applications, see the React integration guide.

- [/guide/react](/guide/react.md)
- [/api/react](/api/react.md)