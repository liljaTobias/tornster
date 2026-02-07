<script setup lang="ts">
import type { FactionWar } from "~~/shared/types/torn/faction";

const myFactionID = 53421; // Replace with dynamic faction ID as needed

const { data, error, pending } = await useTornFetch<FactionWar[]>(
  `/api/torn/faction/wars?ID=${myFactionID}`,
  {
    server: true,
  },
);

const wars = data.value || [];

const getMyFaction = (war: FactionWar) => {
  return war.factions.find((f) => f.id === myFactionID);
};

const getOpponentFaction = (war: FactionWar) => {
  return war.factions.find((f) => f.id !== myFactionID);
};

const getStatus = (war: FactionWar) => {
  if (war.end) {
    return "ended";
  }
  return "ongoing";
};

const handleViewDetails = (war: FactionWar) => {
  // Implement navigation to war details page or modal here
  console.log("View details for war:", war);
};

function formatDate(dateStr: number) {
  if (!dateStr) return "";
  try {
    return new Intl.DateTimeFormat(undefined, {
      dateStyle: "medium",
      timeStyle: "short",
    }).format(new Date(dateStr));
  } catch {
    return dateStr;
  }
}
</script>

<template>
  <div class="max-w-2xl mx-auto px-4 py-8">
    <UCard>
      <template #header>
        <h1 class="text-3xl font-bold text-center">Faction Wars</h1>
      </template>
      <div v-if="pending" class="flex justify-center items-center py-12">
        <span class="ml-4 text-gray-500">Loading wars...</span>
      </div>
      <div v-else-if="error" class="text-center text-red-500 my-8">
        {{ error }}
      </div>
      <div v-else>
        <div v-if="wars.length === 0" class="text-center text-gray-400 my-8">
          No wars found for this faction.
        </div>
        <div v-else class="space-y-4">
          <div
            v-for="war in wars"
            :key="war.id"
            class="border-b border-b-emerald-200 cursor-pointer transition-colors"
            @click="handleViewDetails(war)"
          >
            <div class="flex flex-col gap-2 p-4">
              <div class="flex items-center gap-2">
                <span class="font-semibold text-lg">
                  {{ getMyFaction(war)?.name }} vs
                  {{ getOpponentFaction(war)?.name || "Unknown Faction" }}
                </span>
                <span
                  v-if="getStatus(war) === 'ongoing'"
                  class="inline-block w-3 h-3 rounded-full bg-green-400 animate-pulse"
                  aria-label="Ongoing"
                ></span>
                <span
                  class="ml-auto px-2 py-0.5 rounded-full text-xs font-medium"
                  :class="
                    getStatus(war) === 'ongoing'
                      ? 'bg-green-100 text-green-700'
                      : 'bg-gray-100 text-gray-500'
                  "
                >
                  {{ getStatus(war) }}
                </span>
              </div>
              <div class="flex gap-6 text-sm text-gray-600">
                <span>Start: {{ formatDate(war.start) }}</span>
                <span v-if="war.end">End: {{ formatDate(war.end) }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </UCard>
  </div>
</template>
