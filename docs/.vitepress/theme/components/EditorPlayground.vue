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

  const textarea = root.value.querySelector(
      "[data-mo-editor-textarea]"
  ) as HTMLTextAreaElement | null;

  if (textarea) {
    textarea.value = "Hello ModuloEditor";
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
  <div ref="root" data-mo-editor style="display:grid; gap:16px;">
    <div data-mo-editor-input></div>

    <textarea
        data-mo-editor-textarea
        style="width:100%; min-height:160px; padding:12px;"
    ></textarea>

    <div
        data-mo-editor-preview
        style="min-height:160px; padding:12px; border:1px solid #444;"
    ></div>
  </div>
</template>