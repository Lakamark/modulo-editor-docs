<script setup lang="ts">
import { computed } from 'vue'
import hljs from 'highlight.js'

import 'highlight.js/styles/github-dark.css'

const props = withDefaults(
    defineProps<{
      code: string
      lang?: string
    }>(),
    {
      lang: 'typescript',
    }
)

const html = computed(() => {
  return hljs.highlight(props.code, {
    language: props.lang,
  }).value
})
</script>

<template>
  <pre class="source-code"
       v-html="html"
  />
</template>

<style scoped>
.source-code {

  max-height: 450px;
  overflow: auto;
  margin: 0;
  padding: 16px;
  border-radius: 12px;
}
</style>