<script setup lang="ts">
const { data, pending, error } = useFetch('/api/torn/attacks', {
  server: true
})
</script>

<template>
  <div class="p-6 max-w-4xl mx-auto">
    <h1>Recent attacks</h1>
    <div v-if="pending">Loading</div>
    <div v-else-if="error">Something went wrong</div>

    <div v-else class="space-y-4">
      <UCard v-for="(attack, id) in data.attacks" :key="id">
        <template #header>
          {{ attack.attacker_name }} -> {{ attack.defender_name }}
        </template>
        <div class="text-sm text-gray-500">
          Result: <span class="font-medium">{{ attack.result }}</span>
        </div>
        <div class="text-sm text-gray-500">
          Respect: {{ attack.respect_gain }}
        </div>
      </UCard>
    </div>
  </div>
</template>
