<script setup lang="ts">
import { onMounted } from 'vue'
import {
  BoldToolbarPlugin,
  DefaultEditorDomInitializer,
  ModuloEditorCore,
  StarterKitPreset,
} from '@lakamark/modulo-editor'

import '@lakamark/modulo-editor/reset.css'

onMounted(() => {
  const editor = ModuloEditorCore
      .create()
      .withDomInitializer(new DefaultEditorDomInitializer())
      .fromTextarea('#modulo-editor-demo')
      .withPlugins([
          new BoldToolbarPlugin({
            content: '<svg></svg>'
          }),
      ])
      .usePreset(new StarterKitPreset())
      .build()

  editor.init()
})
</script>

<template>
  <div class="modulo-editor-demo">
    <textarea id="modulo-editor-demo">
# Hello ModuloEditor

Write Markdown on the left.

See the rendered output on the right.

- Live Preview
- Toolbar Commands
- Extensible Plugins
- StarterKitPreset
    </textarea>
  </div>
</template>

<style scoped>
.modulo-editor-demo :deep([data-mo-editor]) {
  border: 1px solid var(--vp-c-divider);
  border-radius: 16px;
  background: var(--vp-c-bg);
  overflow: hidden;
}

.modulo-editor-demo :deep([data-mo-editor-body]) {
  min-height: 350px;
}

.modulo-editor-demo :deep([data-mo-editor-preview]) {
  border-left: 1px solid var(--vp-c-divider);
}

@media (max-width: 768px) {
  .modulo-editor-demo :deep([data-mo-editor-preview]) {
    border-left: 0;
    border-top: 1px solid var(--vp-c-divider);
  }
}
</style>