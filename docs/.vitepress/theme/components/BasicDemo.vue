<script setup lang="ts">
import { onMounted } from 'vue'
import {
  ModuloEditor,
  TextareaInputAdapter,
  HtmlPreviewAdapter,
  DefaultMarkdownProcessor,
  PlainTextMarkdownParser,
  DomPurifyHtmlSanitizer,
  DEFAULT_HTML_SANITIZER_CONFIG,
  DefaultEditorDomResolver,
} from '@lakamark/modulo-editor'

onMounted(() => {
  const editor = ModuloEditor
      .create('#editor')
      .withInput(new TextareaInputAdapter())
      .withOutput(new HtmlPreviewAdapter())
      .withMarkdown(
          new DefaultMarkdownProcessor(
              new PlainTextMarkdownParser(),
              new DomPurifyHtmlSanitizer(DEFAULT_HTML_SANITIZER_CONFIG)
          )
      )
      .withDomResolver(new DefaultEditorDomResolver())
      .build()

  editor.init()
})
</script>

<style scoped>
[data-mo-editor] {
  border: 1px solid var(--vp-c-divider);
  border-radius: 12px;
  overflow: hidden;
}

[data-mo-editor-input] {
  border-bottom: 1px solid var(--vp-c-divider);
}

:deep(.mo-editor__textarea) {
  width: 100%;
  min-height: 160px;
  padding: 16px;
  box-sizing: border-box;
  border: 0;
  outline: none;
  resize: vertical;
  background: transparent;
  color: var(--vp-c-text-1);
  font-family: var(--vp-font-family-mono),serif;
}

[data-mo-editor-preview] {
  min-height: 160px;
  padding: 16px;
  background: var(--vp-c-bg-soft);
}
</style>

<template>
  <div id="editor" data-mo-editor>
    <div data-mo-editor-input contenteditable="true"></div>
    <div data-mo-editor-preview></div>
    <textarea data-mo-editor-textarea hidden></textarea>
  </div>
</template>