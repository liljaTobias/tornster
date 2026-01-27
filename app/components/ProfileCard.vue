<script setup lang="ts">
import type { UserProfile } from "#shared/types/torn/user";

const { data } = await useFetch<UserProfile>("/api/torn/userbasic", {
  server: true,
});

const profile = data.value;
</script>

<template>
  <UCard>
    <template #header>
      <h2 class="text-lg font-semibold">User Profile</h2>
    </template>

    <div v-if="profile" class="space-y-2 text-sm">
      <div><strong>ID:</strong> {{ profile.id }}</div>
      <div><strong>Name:</strong> {{ profile.name }}</div>
      <div><strong>Level:</strong> {{ profile.level }}</div>
      <div><strong>Status:</strong> {{ profile.status.state }}</div>
    </div>

    <div v-else class="text-sm text-gray-500">Loading profile...</div>
  </UCard>
</template>
