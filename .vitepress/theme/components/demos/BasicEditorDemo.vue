<script setup lang="ts">
import { onMounted } from 'vue'
import {
  DefaultEditorDomInitializer,
  ModuloEditorCore,
  StarterKitPreset,
} from '@lakamark/modulo-editor'

import '@lakamark/modulo-editor/reset.css'
import '../../modulo-editor-demo.css'

const emit = defineEmits<{
  event: [message: string]
}>()

onMounted(() => {
  const editor = ModuloEditorCore
      .create()
      .withDomInitializer(new DefaultEditorDomInitializer())
      .fromTextarea('#modulo-editor-demo')
      .usePreset(new StarterKitPreset())
      .build()

  editor.on('editor:init', () => {
    emit('event', 'editor:init')
  })

  editor.on('content:change', ({ source }) => {
    emit('event', `content:change (${source})`)
  })

  editor.init();

})
</script>

<template>
  <div class="modulo-editor-demo">
    <textarea id="modulo-editor-demo">
      # Hello ModuloEditor
      The is a basic example
    </textarea>
  </div>
</template>

<style scoped>
</style>