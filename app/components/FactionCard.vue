<script setup lang="ts">
import type { Faction } from "#shared/types/torn/attack";

const { data: basicInfo } = await useFetch<Faction>(
  "/api/torn/faction/basic?ID=53421",
  {
    server: true,
  },
);
</script>

<template>
  <UCard>
    <template #header>
      <h2 class="text-lg font-semibold">Faction Basic Info</h2>
    </template>

    <div v-if="basicInfo" class="space-y-4">
      <ul>
        <li v-for="(value, key) in basicInfo">
          <strong>{{ key }}:</strong> {{ value }}
        </li>
      </ul>
    </div>
  </UCard>
</template>
