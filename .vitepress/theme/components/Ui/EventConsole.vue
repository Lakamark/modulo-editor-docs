<script setup lang="ts">
interface ConsoleEntry {
  timestamp: string
  message: string
}

defineProps<{
  entries: ConsoleEntry[]
}>()
</script>

<template>
  <div class="event-console">
    <div
        v-if="entries.length === 0"
        class="event-console__empty"
    >
      Waiting for events...
    </div>

    <div
        v-for="(entry, index) in entries"
        :key="index"
        class="event-console__entry"
    >
      <span class="event-console__timestamp">
        {{ entry.timestamp }}
      </span>

      <span class="event-console__message">
        {{ entry.message }}
      </span>
    </div>
  </div>
</template>

<style scoped>
.event-console {
  max-height: 250px;
  overflow-y: auto;

  padding: 16px;
  border-radius: 12px;
  background: var(--vp-code-block-bg);

  font-family: var(--vp-font-family-mono),serif;
  font-size: 13px;

  scrollbar-gutter: stable;
}

.event-console__empty {
  opacity: 0.6;
}

.event-console__entry {
  display: flex;
  gap: 12px;
  line-height: 1.8;
}

.event-console__timestamp {
  flex: 0 0 auto;
  opacity: 0.55;
}

.event-console__message {
  word-break: break-word;
}
</style>