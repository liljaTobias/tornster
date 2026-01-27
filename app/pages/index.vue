<script setup lang="ts">
import type { AttacksResponse } from "#shared/types/torn/attack";

const { data } = useFetch<AttacksResponse>("/api/torn/attacks", {
  server: true,
});

const attacks = data.value?.attacks;
</script>

<template>
  <div class="p-6 max-w-4xl mx-auto flex flex-col gap-10">
    <ProfileCard />
    <BarsCard />
    <h1 class="text-2xl font-bold mb-4">Attacks</h1>
    <div v-if="attacks?.length === 0">No attacks found.</div>
    <li v-for="attack in attacks">
      {{ attack.id }}
    </li>
  </div>
</template>
