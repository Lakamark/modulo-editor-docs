import { ref } from 'vue'

export interface ConsoleEntry {
    timestamp: string
    message: string
}

export function useEventConsole(limit = 25) {
    const entries = ref<ConsoleEntry[]>([])

    function addEntry(message: string): void {
        entries.value.unshift({
            timestamp: new Date().toLocaleTimeString(),
            message,
        })

        if (entries.value.length > limit) {
            entries.value.pop()
        }
    }

    function clear(): void {
        entries.value = []
    }

    return {
        entries,
        addEntry,
        clear,
    }
}