<script setup lang="ts">
import type { Faction } from "#shared/types/torn/attack";

const { factionId } = defineProps<{
  factionId:string
}>()

const { data: basicInfo } = await useFetch<Faction>(
  () => `/api/torn/faction/basic?ID=${factionId}`,
  {
    server: true,
  },
);
</script>

<template>
  <UCard>
    <template #header>
      <h2 class="text-lg font-semibold">Faction Basic Info - {{ basicInfo?.name }}</h2>
    </template>

    <div v-if="basicInfo" class="space-y-4">
      <ul>
        <li v-for="(value, key) in basicInfo"
        :key="key"
        >
          <strong v-if="key !== 'name'">{{ key }}:</strong> {{ value }}
        </li>
      </ul>
    </div>
  </UCard>
</template>
