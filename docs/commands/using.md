# Using commands

Commands can be executed from plugins, UI components, or directly using the API.

## Using from plugin

```ts
export class BoldButtonPlugin implements EditorPlugin {
  mount(api: EditorPluginApi): void {
    const button = document.createElement("button");

    button.textContent = "Bold";

    button.onclick = () => {
      api.executeCommand("bold");
    };

    api.slots.toolbar?.appendChild(button);
  }

  destroy(): void {}
}
```

## Using from UI

Commands can be triggered from any UI element.

```ts
button.addEventListener("click", () => {
  api.executeCommand("italic");
});
```

## Using programmatically

Commands can also be executed directly.

```ts
editor.executeCommand("bold");
```

## Built-in commands

Built-in commands can be executed the same way.

```ts
api.executeCommand("bold");
api.executeCommand("italic");
```
