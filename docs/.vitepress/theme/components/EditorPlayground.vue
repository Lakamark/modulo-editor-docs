<script setup lang="ts">
import { onMounted, ref } from "vue";
import {
  DEFAULT_HTML_SANITIZER_CONFIG,
  DefaultMarkdownProcessor, DomPurifyHtmlSanitizer,
  HiddenTextareaBridge,
  HtmlPreviewAdapter,
  ModuloEditor, PlainTextMarkdownParser,
  TextareaInputAdapter
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
      .withTextareaBridge(new HiddenTextareaBridge())
      .withMarkdown(
          new DefaultMarkdownProcessor(
              new PlainTextMarkdownParser(),
              new DomPurifyHtmlSanitizer(DEFAULT_HTML_SANITIZER_CONFIG)
          )
      )
      .build()
  editor.init();

  console.log("mounted", editor);

})

</script>
<template>
  <div ref="root" data-mo-editor>
    <div data-mo-editor-input></div>
    <div data-mo-editor-preview></div>
    <textarea data-mo-editor-textarea></textarea>
  </div>
</template>