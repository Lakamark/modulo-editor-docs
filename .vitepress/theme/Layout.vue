<script setup>
import DefaultTheme from 'vitepress/theme'
import VersionBadge from './components/VersionBadge.vue'
</script>

<template>
  <DefaultTheme.Layout>
    <template #sidebar-nav-before>
      <VersionBadge />
    </template>
  </DefaultTheme.Layout>
</template>