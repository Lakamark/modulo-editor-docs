<script setup lang="ts">
import EventConsole from "../components/Ui/EventConsole.vue";
import DemoLayout from "../components/Ui/DemoLayout.vue";
import BasicEditorDemo from "../components/demos/BasicEditorDemo.vue";
import SourceTabs from '../components/Ui/SourceTabs.vue';

import source from '../components/demos/BasicEditorDemo.vue?raw'
import {useEventConsole} from "../components/composables/useEventConsole";

const { entries, addEntry } = useEventConsole()
</script>

<template>
  <DemoLayout>
    <template #demo>
      <BasicEditorDemo  @event="addEntry"/>
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