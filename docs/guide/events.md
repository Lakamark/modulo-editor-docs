# Events

ModuloEditor provides a lightweight event system that allows you to react to editor activity.

The event API is intentionally limited for security, stability, and type-safety reasons.

> [!IMPORTANT]
> ModuloEditor only exposes a fixed set of supported events.
>
> Internal editor state and implementation details are not exposed through the event API.
>
> Arbitrary custom event names are not currently supported.

## Listen to Events

Use the `on()` method to subscribe to events.

```ts
editor.on('editor:init', () => {
    console.log('[ModuloEditor] Ready');
});
```

## Unsubscribe

The `on()` method returns an unsubscribe function.

```ts
const unsubscribe = editor.on('editor:init', () => {
    console.log('[ModuloEditor] Ready');
});

unsubscribe();
```

## Available Events

| Event                   | Description                                 |
|-------------------------|---------------------------------------------|
| `editor:before-init`    | Fired before editor initialization.         |
| `editor:init`           | Fired when the editor has been initialized. |
| `editor:before-destroy` | Fired before editor destruction.            |
| `editor:destroy`        | Fired when the editor has been destroyed.   |
| `content:before-change` | Fired before content synchronization.       |
| `content:change`        | Fired after content synchronization.        |
| `command:execute`       | Fired when a command is executed.           |
| `asset:upload-request`  | Fired when a file upload is requested.      |
| `asset:upload-success`  | Fired when a file upload succeeds.          |
| `asset:upload-error`    | Fired when a file upload fails.             |

---

# Lifecycle Events

Lifecycle events are emitted automatically by ModuloEditor.

## editor:before-init

Fired before the editor starts initialization.

```ts
editor.on('editor:before-init', () => {
    console.log('[ModuloEditor] Before init');
});
```

## editor:init

Fired when the editor has been initialized.

Simple usage:

```ts
editor.on('editor:init', () => {
    console.log('[ModuloEditor] Ready');
});
```

Advanced usage:

```ts
editor.on('editor:init', ({ timestamp }) => {
    console.log('[ModuloEditor] Ready', timestamp);
});
```

## editor:before-destroy

Fired before the editor starts destruction.

```ts
editor.on('editor:before-destroy', () => {
    console.log('[ModuloEditor] Before destroy');
});
```

## editor:destroy

Fired when the editor has been destroyed.

Simple usage:

```ts
editor.on('editor:destroy', () => {
    console.log('[ModuloEditor] Destroyed');
});
```

Advanced usage:

```ts
editor.on('editor:destroy', ({ timestamp }) => {
    console.log('[ModuloEditor] Destroyed', timestamp);
});
```

### Lifecycle Payload

```ts
{
    timestamp: number;
}
```

| Property    | Type     | Description                     |
|-------------|----------|---------------------------------|
| `timestamp` | `number` | Unix timestamp in milliseconds. |

> [!NOTE]
> The payload is optional.
>
> Most applications only need to react to the event itself.
>
> Additional metadata such as `timestamp` is provided for advanced use cases like logging, analytics, debugging, or performance monitoring.

---

# Content Events

Content events allow integrations to observe the content update lifecycle.

You can listen before and after content synchronization:

* `content:before-change` gives access to the incoming Markdown value before synchronization.
* `content:change` gives access to the synchronized Markdown value and rendered HTML after the update.

This is useful for integrations that need to run additional processing after an update, such as:

* autosave
* analytics
* translation
* search indexing
* external synchronization

For example:

```ts
editor.on('content:before-change', ({ value, source }) => {
    console.log('[ModuloEditor] Incoming content', {
        value,
        source,
    });
});

editor.on('content:change', async ({ value, html, source }) => {
    await translationService.sync({
        markdown: value,
        html,
        source,
    });
});
```

> [!TIP]
> Use `content:change` for post-processing workflows.
>
> At this point, the editor content has been synchronized and the HTML output is available.

## content:before-change

Fired before content synchronization.

Simple usage:

```ts
editor.on('content:before-change', () => {
    console.log('[ModuloEditor] Before change');
});
```

Advanced usage:

```ts
editor.on('content:before-change', ({ value, source }) => {
    console.log('[ModuloEditor] Before change', {
        value,
        source,
    });
});
```

### Payload

```ts
{
    value: string;
    source: 'input' | 'programmatic' | 'command';
}
```

| Property | Type                               | Description                |
|----------|------------------------------------|----------------------------|
| `value`  | `string`                           | Incoming Markdown content. |
| `source` | `input \| programmatic \| command` | Origin of the update.      |

## content:change

Fired after content synchronization.

Simple usage:

```ts
editor.on('content:change', () => {
    console.log('[ModuloEditor] Content changed');
});
```

Advanced usage:

```ts
editor.on('content:change', ({ value, html, source }) => {
    console.log('[ModuloEditor] Content changed', {
        value,
        html,
        source,
    });
});
```

### Payload

```ts
{
    value: string;
    html: string;
    source: 'input' | 'programmatic' | 'command';
}
```

| Property | Type                               | Description               |
|----------|------------------------------------|---------------------------|
| `value`  | `string`                           | Current Markdown content. |
| `html`   | `string`                           | Rendered HTML output.     |
| `source` | `input \| programmatic \| command` | Origin of the update.     |

### Sources

| Source         | Description                                |
|----------------|--------------------------------------------|
| `input`        | User interaction through the editor input. |
| `programmatic` | Content updated through the public API.    |
| `command`      | Content updated by a command execution.    |

> [!NOTE]
> Event payloads are optional.
>
> Most applications only need to react to the event itself.
>
> Additional metadata is provided for advanced integrations.

---

# Command Events

## command:execute

Fired after a command has been executed.

Simple usage:

```ts
editor.on('command:execute', ({ name }) => {
    console.log('[ModuloEditor] Command executed', name);
});
```

### Payload

```ts
{
    name: string;
}
```

| Property | Type     | Description         |
|----------|----------|---------------------|
| `name`   | `string` | Command identifier. |

---

# Asset Upload Events

Asset upload events allow you to integrate your own upload workflow.

## asset:upload-request

Fired when a file upload is requested.

```ts
editor.on('asset:upload-request', async ({ file }) => {
    try {
        const url = await uploadFile(file);

        editor.emit('asset:upload-success', {
            file,
            url,
        });
    } catch (error) {
        editor.emit('asset:upload-error', {
            file,
            error,
        });
    }
});
```

### Payload

```ts
{
    file: File;
}
```

| Property | Type   | Description               |
|----------|--------|---------------------------|
| `file`   | `File` | File selected for upload. |

## asset:upload-success

Fired when a file upload succeeds.

```ts
editor.on('asset:upload-success', ({ file, url }) => {
    console.log('[ModuloEditor] Upload success', {
        file,
        url,
    });
});
```

### Payload

```ts
{
    file: File;
    url: string;
}
```

| Property | Type     | Description                                |
|----------|----------|--------------------------------------------|
| `file`   | `File`   | Uploaded file.                             |
| `url`    | `string` | Public URL returned by the upload process. |

## asset:upload-error

Fired when a file upload fails.

```ts
editor.on('asset:upload-error', ({ file, error }) => {
    console.error('[ModuloEditor] Upload error', {
        file,
        error,
    });
});
```

### Payload

```ts
{
    file: File;
    error: unknown;
}
```

| Property | Type      | Description                 |
|----------|-----------|-----------------------------|
| `file`   | `File`    | File that failed to upload. |
| `error`  | `unknown` | Upload error.               |

---

# Emitting Events

The `emit()` method can be used to dispatch supported ModuloEditor events.

```ts
editor.emit('asset:upload-success', {
    file,
    url,
});
```

> [!IMPORTANT]
> The event system is typed.
>
> Only events defined by ModuloEditor can be emitted.
>
> Custom event names are not currently supported.

---

# Best Practices

## Use Events for Integrations

Events are ideal for:

* analytics
* logging
* uploads
* notifications
* external integrations

## Prefer Plugins for Features

If you need to add editor functionality, prefer plugins and commands whenever possible.

## Keep Integrations Lightweight

Events are designed to observe and react to editor activity.

Avoid using events as a replacement for editor features, commands, or plugins.

## Missing an Event?

> [!TIP]
> Looking for an event that is not currently available?
>
> Feel free to open an issue or submit a pull request.
>
> New events should follow the same philosophy as the existing API:
>
> * simple
> * stable
> * type-safe
> * implementation agnostic
