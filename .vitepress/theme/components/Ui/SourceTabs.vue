<script setup lang="ts">
import { computed, ref } from 'vue'
import SourceCode from './SourceCode.vue'
import { extractScript, extractStyle, extractTemplate, cleanDemoImports } from '../../utils'

const props = defineProps<{
  source: string
}>()

const tabs = computed(() => {
  const script = cleanDemoImports(extractScript(props.source))
  const template = extractTemplate(props.source)
  const style = extractStyle(props.source)

  return [
    {
      id: 'script',
      label: 'TypeScript',
      lang: 'typescript',
      code: script,
    },
    {
      id: 'template',
      label: 'Template',
      lang: 'xml',
      code: template,
    },
    {
      id: 'style',
      label: 'CSS',
      lang: 'css',
      code: style,
    },
  ].filter((tab) => tab.code.trim().length > 0)
})

const activeTab = ref('script')

const activeSource = computed(() => {
  return tabs.value.find((tab) => tab.id === activeTab.value) ?? tabs.value[0]
})

</script>

<template>
  <div class="source-tabs">
    <div class="source-tabs__nav">
      <button
          v-for="tab in tabs"
          :key="tab.id"
          class="source-tabs__button"
          :class="{
            'source-tabs__button--active': tab.id === activeTab
          }"
          type="button"
          @click="activeTab = tab.id"
      >
        {{ tab.label }}
      </button>
    </div>

    <SourceCode
        v-if="activeSource"
        :lang="activeSource.lang"
        :code="activeSource.code"
    />
  </div>
</template>

<style scoped>
.source-tabs {
  overflow: hidden;
  border-radius: 12px;
  background: var(--vp-code-block-bg);
}

.source-tabs__nav {
  display: flex;
  gap: 4px;
  padding: 8px;
  border-bottom: 1px solid var(--vp-c-divider);
}

.source-tabs__button {
  border: 0;
  padding: 6px 10px;
  border-radius: 8px;
  background: transparent;
  color: var(--vp-c-text-2);
  cursor: pointer;
  font-size: 13px;
}

.source-tabs__button:hover,
.source-tabs__button--active {
  background: var(--vp-c-bg-soft);
  color: var(--vp-c-text-1);
}
</style>