<script setup lang="ts">
import { onMounted, ref } from "vue";
import {
  ModuloEditor,
  DefaultMarkdownProcessor,
  PlainTextMarkdownParser,
  DomPurifyHtmlSanitizer,
  DEFAULT_HTML_SANITIZER_CONFIG, TextareaInputAdapter, HtmlPreviewAdapter
} from "@lakamark/modulo-editor";

const root = ref<HTMLElement | null>(null);

onMounted(() => {
  if (!root.value) {
    return;
  }

  const editor = ModuloEditor
      .create(root.value)
      .withInput(new TextareaInputAdapter())
      .withOutput(new HtmlPreviewAdapter())
      .withMarkdown(
          new DefaultMarkdownProcessor(
              new PlainTextMarkdownParser(),
              new DomPurifyHtmlSanitizer(DEFAULT_HTML_SANITIZER_CONFIG)
          )
      )
      .build();

  editor.init();
})
</script>

<template>
  <div ref="root" data-mo-editor>
    <div
        data-mo-editor-input
        contenteditable="true"
        style="min-height:120px;border:1px solid #ccc;padding:8px;margin-bottom:8px;"
    />

    <div
        data-mo-editor-preview
        style="min-height:120px;border:1px solid #ccc;padding:8px;"
    />

    <textarea data-mo-editor-textarea hidden />
  </div>
</template>

<style scoped>

</style>