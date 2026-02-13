<script setup lang="ts">
import type { RankedWarReport } from "#shared/types/torn/war";
import WarMemberListItem from "~/components/WarMemberListItem.vue";

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

const membersA = computed(() =>
  factionA?.members.map((member) => ({
    ...member,
  })),
);
const membersB = computed(() =>
  factionB?.members.map((member) => ({
    ...member,
  })),
);
</script>

<template>
  <section v-if="report" class="w-full">
    <div
      class="text-center space-y-1 rounded-xl pt-4 pb-4 bg-[url('https://picsum.dev/1920/600?blur=1?grayscale=1')]"
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
    <div class="grid grid-cols-2 pt-4 gap-4">
      <div
        class="bg-primary-50 dark:bg-primary-900/30 rounded-xl p-2 border-2 border-primary-200 dark:border-primary-700"
      >
        <h2 class="text-lg font-bold text-primary text-center mb-2">
          {{ factionA?.name }}
        </h2>
        <ul class="space-y-2">
          <li v-for="member in membersA" :key="member.id">
            <WarMemberListItem :member="member" side="A" />
          </li>
        </ul>
      </div>
      <div
        class="bg-secondary-50 dark:bg-secondary-900/30 rounded-xl p-2 border-2 border-secondary-200 dark:border-secondary-700"
      >
        <h2 class="text-lg font-bold text-secondary text-center mb-2">
          {{ factionB?.name }}
        </h2>
        <ul class="space-y-2">
          <li v-for="member in membersB" :key="member.id">
            <WarMemberListItem :member="member" side="B" />
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>
