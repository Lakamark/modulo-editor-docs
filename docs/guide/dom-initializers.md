# DOM Initializer

A DOM Initializer is responsible for creating the editor interface from an existing textarea.

## Default implementation

ModuloEditor provides a default implementation:

```ts
new DefaultEditorDomInitializer();
```
This implementation creates the standard ModuloEditor layout.

## Usage

```ts
import {
    DefaultEditorDomInitializer,
    ModuloEditorCore,
    StarterKitPreset
} from "@lakamark/modulo-editor";

const editor = ModuloEditorCore
    .create()
    .withDomInitializer(new DefaultEditorDomInitializer())
    .fromTextarea('#editor')
    .usePreset(new StarterKitPreset())
    .build();
```

## Custom implementation
```ts
import {
    EditorDomInitializationResult,
    EditorDomInitializer
} from "@lakamark/modulo-editor";

class CustomDomInitializer implements EditorDomInitializer {
    public initialize(
        textarea: HTMLTextAreaElement
    ): EditorDomInitializationResult {
        throw new Error("Not implemented.");
    }
}
```
## When should I create my own?
Create a custom DOM Initializer when you need complete control over the generated editor markup.

For most projects, the default implementation is sufficient.