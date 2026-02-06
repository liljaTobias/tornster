<script setup lang="ts">
const route = useRoute();

const factionId = String(route.params.id);
</script>
<template>
    <FactionCard :factionId="factionId"/>
</template>
