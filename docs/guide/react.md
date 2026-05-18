# React

ModuloEditor provides a React wrapper for applications using React, Inertia, Laravel, or any React-based frontend.

## Installation

```bash
npm install @lakamark/modulo-editor react react-dom
```

## Basic usage

```tsx
import { ModuloEditor } from '@lakamark/modulo-editor';

export function App() {
    return (
        <ModuloEditor value="# Hello World" />
    );
}
```

## Listening for changes

```tsx
import { useState } from 'react';
import { ModuloEditor } from '@lakamark/modulo-editor';

export function App() {
    const [content, setContent] = useState('# Hello World');

    return (
        <ModuloEditor
            value={content}
            onChange={setContent}
        />
    );
}
```

`onChange` is triggered on every editor update.

For autosave or expensive operations, add a debounce in your application layer.

## Form submission

```tsx
<form method="post">
    <ModuloEditor
        name="content"
        value="# Hello World"
    />

    <button type="submit">
        Save
    </button>
</form>
```

ModuloEditor keeps an internal textarea synchronized so standard form submissions receive the current editor value.

## Custom presets

```tsx
import {
    ModuloEditor,
    StarterKitPreset,
} from '@lakamark/modulo-editor';

<ModuloEditor
    presets={[
        new StarterKitPreset(),
    ]}
/>
```

## Custom plugins

```tsx
import {
    ModuloEditor,
    ToolbarPlugin,
} from '@lakamark/modulo-editor';

<ModuloEditor
    plugins={[
        new ToolbarPlugin(),
    ]}
/>
```

## Status

The React wrapper is currently experimental and available in alpha releases.