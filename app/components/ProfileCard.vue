<script setup lang="ts">
import type { UserProfile } from "#shared/types/torn/user";

const { user, setFactionId } = useUser();

const { data } = await useTornFetch<UserProfile>("/api/torn/userbasic", {
  server: true,
});

const factionInput = ref(user.value?.faction?.toString() || "");

const handleSetFaction = (factionID: number) => {
  setFactionId(factionID);
};

const profile = data.value;
</script>

<template>
  <UCard>
    <template #header>
      <h2 class="text-lg font-semibold">Torn character</h2>
    </template>

    <div v-if="profile" class="space-y-2 text-sm">
      <div><strong>ID:</strong> {{ profile.id }}</div>
      <div><strong>Name:</strong> {{ profile.name }}</div>
      <div><strong>Level:</strong> {{ profile.level }}</div>
      <div><strong>Status:</strong> {{ profile.status.state }}</div>
      <div>
        <strong>Faction: </strong
        ><UInput v-model="factionInput" :ui="{ trailing: 'pr-0.5' }">
          <template #trailing>
            <UButton
              size="xs"
              color="primary"
              @click="handleSetFaction(Number(factionInput))"
            >
              Set Faction
            </UButton>
          </template>
        </UInput>
      </div>
    </div>

    <div v-else class="text-sm text-gray-500">Loading profile...</div>
  </UCard>
</template>
