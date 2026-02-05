<script setup lang="ts">
definePageMeta({
  middleware: "auth",
});

const user = useUser();
const { logout } = useAuth();
</script>

<template>
  <div class="gap-y-2">
    <h1 class="text-2xl font-bold mb-4">Profile</h1>
    <UCard class="mb-4">
      <template #header>
        <div class="text-lg font-semibold">User information</div>
      </template>
      <div v-if="user" class="space-y-2">
        <div><strong>Name:</strong> {{ user.name }}</div>
        <div><strong>API Key:</strong> {{ user.apiKey }}</div>
      </div>
    </UCard>
    <ProfileCard />
    <UButton color="primary" @click="logout" size="xl" class="mt-4"
      >Logout</UButton
    >
  </div>
</template>
