# Default behavior

When using `fromTextarea()`, ModuloEditor enhances an existing `<textarea>` element.

The editor acts as a visual interface that updates a hidden textarea.

The textarea remains the source of truth for form submission.

## How it works

When initialized:

* the editor UI is created
* the original textarea is moved inside the editor
* the textarea is hidden
* editor changes update the textarea value

The hidden textarea is still submitted with the form.

## Example

```html
<form method="post">
  <textarea id="content" name="content"></textarea>

  <button type="submit">Save</button>
</form>
```

```ts
ModuloEditor
  .fromTextarea("#content")
  .init();
```

The editor replaces the textarea visually, but the textarea is still used for submission.

## Important

ModuloEditor does not replace the textarea.

It only provides a visual editor that synchronizes its value.

The textarea:

* remains in the DOM
* keeps its original attributes (name, id, required, etc.)
* participates in form submission
* remains usable if JavaScript is disabled

This ensures compatibility with traditional HTML forms.

## Non-intrusive behavior

ModuloEditor enhances the textarea without changing its behavior.

If JavaScript is disabled, the original textarea remains visible and usable.

The form continues to work normally.
