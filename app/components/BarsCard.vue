<script setup lang="ts">
import type { Bars } from "#shared/types/torn/bars";

const { data, pending, error } = await useFetch<Bars>("/api/torn/bars", {
  server: true,
});

const bars = data.value;

const BAR_ORDER = [
  { key: "energy", label: "Energy" },
  { key: "nerve", label: "Nerve" },
  { key: "life", label: "Life" },
  { key: "happy", label: "Happy" },
] as const;
</script>

<template>
  <UCard>
    <template #header>
      <h2 class="text-lg font-semibold">Current Bars</h2>
    </template>

    <!-- Loading -->
    <div v-if="pending" class="space-y-4">
      <USkeleton v-for="i in 4" :key="i" class="h-6 w-full" />
    </div>

    <!-- Error -->
    <div v-else-if="error" class="text-sm text-red-500">
      Failed to load bars.
    </div>

    <!-- Bars -->
    <div v-else-if="bars" class="space-y-4">
      <div v-for="{ key, label } in BAR_ORDER" :key="key" class="space-y-1">
        <div class="flex justify-between text-sm">
          <span class="font-medium">{{ label }}</span>
          <span class="text-gray-500">
            {{ bars[key].current }} / {{ bars[key].maximum }}
          </span>
        </div>

        <UProgress
          v-model="bars[key].current"
          :max="bars[key].maximum"
          size="sm"
        />
      </div>
    </div>
  </UCard>
</template>
