<script setup lang="ts">
import { onMounted } from 'vue'
import {
  DefaultEditorDomInitializer,
  ModuloEditorCore,
  StarterKitPreset,
} from '@lakamark/modulo-editor'

import '@lakamark/modulo-editor/reset.css'
import '../../modulo-editor-demo.css'

onMounted(() => {
  const editor = ModuloEditorCore
      .create()
      .withDomInitializer(new DefaultEditorDomInitializer())
      .fromTextarea('#modulo-editor-demo')
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
</style>