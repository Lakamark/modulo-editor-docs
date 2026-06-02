# Custom Toolbar

Create a custom toolbar by registering only the toolbar plugins your editor needs.

## Live Demo

<ClientOnly>
  <CustomToolbarExample />
</ClientOnly>

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
