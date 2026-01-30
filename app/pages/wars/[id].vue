<script setup lang="ts">
const route = useRoute();

const warId = Number(route.params.id);
</script>
<template>
  <WarDetails :warId="warId" />
</template>
