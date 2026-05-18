# React API

## `<ModuloEditor />`
ModuloEditor provides a lightweight React integration layer for React applications.

```tsx
import { ModuloEditor } from '@lakamark/modulo-editor';
```

## Props

### `className`

```ts
className?: string;
```

Optional CSS class applied to the editor root element.

### `name`

```ts
name?: string;
```

Name used by the hidden textarea for standard HTML form submissions.

### `value`

```ts
value?: string;
```

Initial editor value.

### `onChange`

```ts
onChange?: (value: string) => void;
```

Called whenever the editor value changes.

`onChange` is triggered on every input update. Add a debounce in your application when using autosave or expensive operations.

### `plugins`

```ts
plugins?: readonly EditorPlugin[];
```

Additional editor plugins mounted by the React wrapper.

### `presets`

```ts
presets?: readonly EditorPreset[];
```

Custom presets used to configure the editor.

When no presets are provided, the React wrapper uses `StarterKitPreset` by default.

## Example

```tsx
import {
    ModuloEditor,
    StarterKitPreset,
} from '@lakamark/modulo-editor';

export function Editor() {
    return (
        <ModuloEditor
            name="content"
            value="# Hello World"
            presets={[
                new StarterKitPreset(),
            ]}
            onChange={(value) => {
                console.log(value);
            }}
        />
    );
}
```