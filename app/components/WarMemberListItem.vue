<script setup lang="ts">
import { Star, Swords } from "lucide-vue-next";

interface Member {
  name: string;
  level: number;
  score: number;
  attacks: number;
}

defineProps<{ member: Member; side?: "A" | "B" }>();
</script>

<template>
  <UCard
    :class="[
      'p-3 sm:p-4 flex flex-col sm:flex-row items-center sm:items-stretch gap-2 sm:gap-4 rounded-xl shadow-md',
      side === 'A' ? 'border-l-4 border-primary-500' : '',
      side === 'B' ? 'border-r-4 border-secondary-500' : '',
      'bg-white dark:bg-gray-900',
    ]"
  >
    <div
      class="flex flex-col flex-1 items-center sm:items-start text-center sm:text-left"
    >
      <div class="flex items-center gap-2">
        <span class="font-semibold text-base sm:text-lg">{{
          member.name
        }}</span>
        <span
          class="text-xs text-gray-400 bg-gray-100 dark:bg-gray-800 rounded px-2 py-0.5 ml-1"
          >Lv. {{ member.level }}</span
        >
      </div>
    </div>
    <div class="flex flex-row gap-4 mt-2 sm:mt-0">
      <div class="flex items-center gap-1">
        <Star class="w-4 h-4 text-primary" />
        <span class="text-sm font-medium">{{ member.score }}</span>
      </div>
      <div class="flex items-center gap-1">
        <Swords class="w-4 h-4 text-primary" />
        <span class="text-sm font-medium">{{ member.attacks }}</span>
      </div>
    </div>
  </UCard>
</template>
