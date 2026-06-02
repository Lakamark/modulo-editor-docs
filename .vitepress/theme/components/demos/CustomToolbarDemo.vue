<script setup lang="ts">
import { onMounted } from 'vue'
import {
  BoldToolbarPlugin,
  DefaultEditorDomInitializer,
  HeadingToolbarPlugin,
  ItalicToolbarPlugin,
  ModuloEditorCore,
  SafeMarkdownPreset,
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
      .usePreset(new  SafeMarkdownPreset())
      .usePreset(new StarterKitPreset())
      .withPlugins([
          new BoldToolbarPlugin({
            content: 'B',
          }),
        new ItalicToolbarPlugin({
          content: 'I',
        }),
          new HeadingToolbarPlugin(1),
          new HeadingToolbarPlugin(2),
          new HeadingToolbarPlugin(3),
          new HeadingToolbarPlugin(4),
      ])
      .build()

  editor.on('editor:init', () => {
    emit('event', 'editor:init')
  })

  editor.on('content:change', ({ source }) => {
    emit('event', `content:change (${source})`)
  })

  editor.init()
})
</script>

<template>
  <textarea id="modulo-editor-demo">
    # Hello ModuloEditor
    You can add some plugins in the toolbar
  </textarea>
</template>

<style scoped>
</style>