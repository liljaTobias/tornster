<script setup lang="ts">
import type { FactionWar } from "#shared/types/torn/faction";

const { data } = await useFetch<FactionWar[]>(
  "/api/torn/faction/wars?ID=53421",
  {
    server: true,
  },
);

const latestWar = data.value ? data.value[0] : null;
const winner = latestWar
  ? latestWar.factions.find((faction) => faction.id === latestWar.winner)
  : null;
const loser = latestWar
  ? latestWar.factions.find((faction) => faction.id !== latestWar.winner)
  : null;

const warLink = computed(() => (latestWar ? `/wars/${latestWar.id}` : "#"));
</script>

<template>
  <UCard>
    <template #header>
      <h2 class="text-lg font-semibold">Latest Faction War</h2>
    </template>
    <h2 style="font-weight: bold; margin-bottom: 0.5rem">
      {{ `${latestWar?.factions[0]?.name} vs ${latestWar?.factions[1]?.name}` }}
    </h2>
    <USeparator />
    <ul v-if="latestWar">
      <li>
        <strong>Started:</strong>
        {{ new Date(latestWar.start).toLocaleTimeString() }}
      </li>
      <li>
        <strong>Ended:</strong>
        {{ new Date(latestWar.end).toLocaleTimeString() }}
      </li>
      <li><strong>Winner: </strong>{{ winner?.name }}</li>
      <li>
        <strong>Score({{ winner?.name }}): </strong>{{ winner?.score }}
      </li>
      <li>
        <strong>Score({{ loser?.name }}): </strong>{{ loser?.score }}
      </li>
    </ul>
    <template #footer>
      <UButton label="See Details" :to="warLink" />
    </template>
  </UCard>
</template>
