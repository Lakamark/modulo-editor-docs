# Custom Toolbar

Create a custom toolbar by registering only the toolbar plugins your editor needs.

## Live Demo

<CustomToolbarDemo />

## Source Code

```ts
import {
    BoldToolbarPlugin,
    DefaultEditorDomInitializer,
    ItalicToolbarPlugin,
    ModuloEditorCore,
    StarterKitPreset,
} from '@lakamark/modulo-editor';

const editor = ModuloEditorCore
    .create()
    .withDomInitializer(new DefaultEditorDomInitializer())
    .fromTextarea('#modulo-editor-demo')
    .usePreset(new StarterKitPreset())
    .withPlugins([
        new BoldToolbarPlugin({
            content:  'B'
        }),
        new ItalicToolbarPlugin({
            content: 'I',
        }),
        new HeadingToolbarPlugin(1),
        new HeadingToolbarPlugin(2),
        new HeadingToolbarPlugin(3),
        new HeadingToolbarPlugin(4),
    ])
    .build()

editor.init()
```

The Starter Kit configures the editor foundation.

Toolbar features are added explicitly through plugins, allowing you to build a toolbar that matches your application's needs.

### HTML Strings

String values are always rendered as plain text.

```ts
new BoldToolbarPlugin({
    content: '<strong>B</strong>',
});
```

The example above displays:

```text
<strong>B</strong>
```

instead of rendering HTML markup.

If you need custom markup, provide an `HTMLElement` instead.

```ts
const element = document.createElement('strong');
element.textContent = 'B';

new BoldToolbarPlugin({
    content: element,
});
```
