<script setup lang="ts">
import { onMounted, ref } from 'vue'
import {
  DefaultEditorDomInitializer,
  ModuloEditorCore,
  StarterKitPreset,
} from '@lakamark/modulo-editor'

import { DemoAssetUploaderPlugin } from '../../plugins/DemoAssetUploaderPlugin'

import '@lakamark/modulo-editor/reset.css'
import '../../modulo-editor-demo.css'

const emit = defineEmits<{
  event: [message: string]
}>()

const fileInput = ref<HTMLInputElement>()
let editor: ReturnType<ReturnType<typeof ModuloEditorCore.create>['build']>

function selectFile(): void {
  fileInput.value?.click()
}

function onFileSelected(event: Event): void {
  const input = event.target as HTMLInputElement
  const file = input.files?.[0]

  if (!file || !editor) {
    return
  }

  editor.emit('asset:upload-request', { file })
  input.value = ''
}

onMounted(() => {
  editor = ModuloEditorCore
      .create()
      .withDomInitializer(new DefaultEditorDomInitializer())
      .fromTextarea('#modulo-editor-demo')
      .usePreset(new StarterKitPreset())
      .withPlugins([
        new DemoAssetUploaderPlugin(),
      ])
      .build()

  editor.on('asset:upload-request', ({ file }) => {
    emit('event', `asset:upload-request (${file.name})`)
  })

  editor.on('asset:upload-success', ({ url }) => {
    emit('event', `asset:upload-success (${url})`);
    editor.insertContent(
        `![Uploaded image](${url})`
    )
  })

  editor.on('asset:upload-error', () => {
    emit('event', 'asset:upload-error')
  })

  editor.init()
})
</script>

<template>
  <div class="modulo-editor-demo">
    <button
        class="upload-button"
        type="button"
        @click="selectFile"
    >
      Upload Image
    </button>

    <input
        ref="fileInput"
        hidden
        type="file"
        accept="image/*"
        @change="onFileSelected"
    />
    <textarea id="modulo-editor-demo">
      # Hello ModuloEditor
      You can watch upload events
    </textarea>
  </div>
</template>

<style scoped>
.modulo-editor-demo {
  display: flex;
  flex-direction: column;
  gap: 12px;
}
.upload-button {
  display: inline-flex;
  align-items: center;
  gap: 8px;

  padding: 8px 12px;

  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;

  background: var(--vp-c-bg-soft);
  color: var(--vp-c-text-1);

  font-size: 14px;
  font-weight: 500;

  cursor: pointer;
  transition: all .2s ease;
}

.upload-button:hover {
  border-color: var(--vp-c-brand-1);
  color: var(--vp-c-brand-1);
}
</style>