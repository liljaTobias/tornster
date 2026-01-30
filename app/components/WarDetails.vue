<script setup lang="ts">
import type { RankedWarReport } from "#shared/types/torn/war";

interface Props {
  warId: number;
}

const { warId } = defineProps<Props>();

/**
 * Placeholder shape — this will later come from /api/wars/:id
 * Keeping it explicit and readable.
 */
const { data } = await useFetch<RankedWarReport>(
  `/api/torn/faction/wars/${warId}`,
);

const report = data.value;

const factionA = report?.factions[0];
const factionB = report?.factions[1];

const membersA = factionA?.members.map((member) => ({
  ...member,
}));
const membersB = factionB?.members.map((member) => ({
  ...member,
}));

console.log("Members A:", membersA);
</script>

<template>
  <section v-if="report" class="w-full">
    <div
      class="text-center space-y-1 rounded-t-xl pt-4 pb-4 bg-[url('https://picsum.dev/1920/600?blur=1?grayscale=1')]"
    >
      <p
        class="text-xs uppercase tracking-wide text-gray-300 text-shadow-black"
      >
        Latest war
      </p>
      <h2 class="text-lg font-semibold">War #{{ warId }}</h2>
      <div class="mt-6 grid grid-cols-3 items-center text-center">
        <!-- Faction A -->
        <div class="space-y-1">
          <p class="text-sm font-medium truncate">
            {{ factionA?.name }}
          </p>
          <p class="text-3xl font-bold">
            {{ factionA?.score }}
          </p>
        </div>
        <!-- VS -->
        <div class="text-sm font-semibold text-gray-300">VS</div>

        <!-- Faction B -->
        <div class="space-y-1">
          <p class="text-sm font-medium truncate">
            {{ factionB?.name }}
          </p>
          <p class="text-3xl font-bold">
            {{ factionB?.score }}
          </p>
        </div>
      </div>
    </div>
    <USeparator />
    <div class="grid grid-cols-2 divide-x-2 divide-dashed pt-4">
      <div>
        <h2 class="text-lg font-bold text-center">Members</h2>
        <UTable :data="membersA" />
      </div>
      <div>
        <h2 class="text-lg font-bold text-center">Members</h2>
        <UTable :data="membersB" />
      </div>
    </div>
  </section>
</template>
