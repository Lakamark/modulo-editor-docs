# Custom preset

You can create your own preset to reuse a predefined editor configuration.

A preset configures the editor using the builder.

## Example

```ts
export const MyPreset = (builder: ModuloEditorBuilder) => {
  return builder
    .withMarkdown(myMarkdownProcessor)
    .withPlugins([
      new MyPlugin()
    ]);
};
```

## Using preset

```ts
ModuloEditor
  .create('[data-mo-editor]')
  .usePreset(MyPreset)
  .init();
```

## Why use custom presets

Custom presets help:

* reuse configuration
* standardize editor setup
* reduce boilerplate
* share configurations

Presets are especially useful when creating multiple editors with the same setup.
