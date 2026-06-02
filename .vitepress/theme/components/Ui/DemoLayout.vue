<script setup lang="ts">
import DemoPanel from './DemoPanel.vue'
</script>

<template>
  <div class="demo-layout">
    <div class="demo-layout__demo">
      <slot name="demo" />
    </div>

    <DemoPanel
        v-if="$slots.console"
        title="Console"
    >
      <slot name="console" />
    </DemoPanel>
    
    <DemoPanel
        v-if="$slots.source"
        title="Source"
    >
      <slot name="source" />
    </DemoPanel>
    
  </div>
</template>

<style scoped>
.demo-layout__demo {
  margin-bottom: 12px;
}
</style>