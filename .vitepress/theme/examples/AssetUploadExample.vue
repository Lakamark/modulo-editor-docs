<script setup lang="ts">
import DemoLayout from "../components/Ui/DemoLayout.vue";
import AssetUploadDemo from "../components/demos/AssetUploadDemo.vue";
import {useEventConsole} from "../components/composables/useEventConsole";
import EventConsole from "../components/Ui/EventConsole.vue";
import SourceTabs from "../components/Ui/SourceTabs.vue";

import source from '../components/demos/AssetUploadDemo.vue?raw'

const { entries, addEntry } = useEventConsole()

</script>

<template>
  <DemoLayout>
    <template #demo>
      <AssetUploadDemo @event="addEntry"/>
    </template>

    <template #console>
      <EventConsole :entries="entries" />
    </template>

    <template #source>
      <SourceTabs :source="source" />
    </template>

  </DemoLayout>
</template>

<style scoped>

</style>