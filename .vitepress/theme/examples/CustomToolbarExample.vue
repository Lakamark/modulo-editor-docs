<script setup lang="ts">
import EventConsole from "../components/Ui/EventConsole.vue";
import DemoLayout from "../components/Ui/DemoLayout.vue";
import SourceTabs from '../components/Ui/SourceTabs.vue';

import source from '../components/demos/CustomToolbarDemo.vue?raw'

import {useEventConsole} from "../components/composables/useEventConsole";
import CustomToolbarDemo from "../components/demos/CustomToolbarDemo.vue";

const { entries, addEntry } = useEventConsole()
</script>

<template>
  <DemoLayout>
    <template #demo>
      <CustomToolbarDemo  @event="addEntry"/>
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