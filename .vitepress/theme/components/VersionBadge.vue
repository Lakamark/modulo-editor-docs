<script setup lang="ts">
import { MODULO_VERSION } from '../version';
</script>

<template>
  <div class="version-wrapper">
        <span class="version-badge">
            v{{ MODULO_VERSION }}
        </span>
  </div>
</template>

<style scoped>
.version-wrapper {
  margin-top: 1rem;
  margin-bottom: 1rem;
}
.version-badge {
  display: inline-block;

  padding: 0.15rem 0.5rem;

  border-radius: 999px;

  background: var(--vp-c-brand-soft);
  color: var(--vp-c-brand-1);

  font-size: 0.7rem;
  font-weight: 700;
}
</style>