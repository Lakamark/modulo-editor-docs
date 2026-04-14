# Basic Usage
ModuloEditor works with a minimal DOM structure and can also use additional optional slots when needed.

## Minimal structure
The following structure is enough to initialize the editor:
```html
<div data-mo-editor>
    <div data-mo-editor-input></div>
    <div data-mo-editor-preview></div>
    <textarea
        id="content"
        name="content"
        hidden
        data-mo-editor-textarea
    ></textarea>
</div>
```

## Initialization
The following structure is enough to initialize the editor:
```ts
import { ModuloEditor } from "@lakamark/modulo-editor";

ModuloEditor
    .create("[data-mo-editor]")
    .init();
```

## Required slots
The default DOM resolver requires these elements:
* `data-mo-editor-input`
* `data-mo-editor-preview`
* `data-mo-editor-textarea`

## Optional slots
* These elements are optional and only used when present:
* `data-mo-editor-header`
* `data-mo-editor-toolbar`
* `data-mo-editor-body`
* `data-mo-editor-footer`
* `data-mo-editor-status`

## Full structure
You can also use a more complete DOM structure:
```html
<div class="mo-editor" data-mo-editor>
    <div class="mo-editor__header" data-mo-editor-header>
        <div class="mo-editor__toolbar" data-mo-editor-toolbar></div>
    </div>

    <div class="mo-editor__body" data-mo-editor-body>
        <div class="mo-editor__input" data-mo-editor-input></div>
        <div class="mo-editor__preview" data-mo-editor-preview></div>
    </div>

    <div class="mo-editor__footer" data-mo-editor-footer>
        <div class="mo-editor__status" data-mo-editor-status></div>
    </div>

    <textarea
        id="content"
        name="content"
        hidden
        data-mo-editor-textarea
    ></textarea>
</div>
```

## Form submission
The hidden `<textarea>` is the field submitted with the form.
```html
<form method="post">
    <div data-mo-editor>
        <div data-mo-editor-input></div>
        <div data-mo-editor-preview></div>

        <textarea
                id="content"
                name="content"
                hidden
                data-mo-editor-textarea
        ></textarea>
    </div>

    <button type="submit">Save</button>
</form>
```