<script setup lang="ts">
const route = useRoute();

const warId = Number(route.params.id);
</script>
<template>
  <div>
    <UButton
      variant="outline"
      class="mb-4"
      @click="$router.back()"
      icon="lucide-arrow-left"
    >
      Back
    </UButton>
    <WarDetails :warId="warId" />
  </div>
</template>
