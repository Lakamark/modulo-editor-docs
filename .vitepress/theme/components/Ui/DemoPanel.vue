<script setup lang="ts">
defineProps<{
  title: string
}>()
</script>

<template>
  <section class="demo-panel">
    <header class="demo-panel__header">
      <h3 class="demo-panel__title">
        {{ title }}
      </h3>
    </header>

    <div class="demo-panel__content">
      <slot />
    </div>

  </section>
</template>

<style scoped>
.demo-panel {
  margin-top: 12px;
}

.demo-panel__header {
  margin-bottom: 8px;
}

.demo-panel__title {
  margin: 0;
}

.demo-panel__content {
  overflow: auto;
}
</style>