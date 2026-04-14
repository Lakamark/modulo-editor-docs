# build
The `build()` method finalizes the builder configuration and returns a ModuloEditor instance.
The returned editor must be initialized using `init()`.

## Example
```ts
import { ModuloEditor } from "@lakamark/modulo-editor";

const editor = ModuloEditor
  .create("[data-mo-editor]")
  .build();

editor.init();
```

## Chaining
You can also chain `build()` and `init()`.

```ts
ModuloEditor
  .create("[data-mo-editor]")
  .build()
  .init();
```

## Signature
```ts
build(): ModuloEditor
```

## Parameters
| Type           | Description         |
|----------------|---------------------|
| `ModuloEditor` | The editor instance |

## Returns 
| Type           | Description         |
|----------------|---------------------|
| `ModuloEditor` | The editor instance |

## Notes
* `build() `validates the configuration
* `build()` resolves DOM elements
* `build()` prepares plugins
* `build()` creates the editor instance
* `init()` starts the editor lifecycle

## Lifecycle

1. `create()`
2. configure (optional)
3. `build()`
4. `init()`  