# Basic Editor
Create your first ModuloEditor instance using the default DOM initializer and the Starter Kit preset.

<ClientOnly>
  <BasicEditorExample />
</ClientOnly>

## DOM Initializer

Responsible for creating the editor DOM structure.

```ts
ModuloEditorCore
    .withDomInitializer(
        new DefaultEditorDomInitializer()
    )
```

## Preset

Registers the editor services and features.

```ts
ModuloEditorCore
    .usePreset(
        new StarterKitPreset()
    )
```

## Optional CSS Reset

```ts
import '@lakamark/modulo-editor/reset.css'
```

This stylesheet is completely optional.

ModuloEditor does not require any CSS to function.
The reset is only provided as a convenience.


## What You Get

This setup provides:

* Toolbar
* Markdown editing
* Live preview
* Hidden textarea synchronization
* Built-in commands
* Default editor styling

::: tip

The surrounding HTML structure is entirely up to you.

ModuloEditor only requires:

* an existing textarea
* a DOM initializer
* a preset

With these three pieces, you already have a functional Markdown editor.

:::