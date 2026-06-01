# API Reference

The API Reference provides detailed documentation for ModuloEditor classes, interfaces, events, commands, and plugins.

Use this section when you need information about available methods, properties, payloads, or TypeScript types.

## Core

### ModuloEditor

The main editor class.

```ts
import { ModuloEditor } from '@lakamark/modulo-editor';
```

Provides methods to:

* Initialize the editor
* Destroy the editor
* Execute commands
* Manage events
* Access editor services

## Commands

Commands represent reusable editor actions.

Built-in commands include:

* bold
* italic
* heading-1
* heading-2
* heading-3
* heading-4
* heading-5
* heading-6

Commands can also be registered by custom implementations.

## Plugins

Plugins extend editor functionality.

The plugin system can be used to:

* Add toolbar buttons
* Add dropdown menus
* Integrate external services
* Create custom editor features

## Events

The event system allows applications to react to editor actions.

Available event groups include:

* Lifecycle events
* Content events
* Command events
* Custom events

## Presets

Presets provide reusable editor configurations.

Available presets include:

* StarterKitPreset
* DefaultEditorPreset
* SafeMarkdownPreset
* MarkedPreset

## TypeScript Support

ModuloEditor is written in TypeScript and exposes public interfaces for:

* Commands
* Plugins
* Events
* Presets
* DOM adapters
* Input adapters
* Output adapters

## Next Pages

* ModuloEditor
* Commands
* Plugins
* Events
* Presets
* DOM
* Types
