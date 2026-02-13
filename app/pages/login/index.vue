<script setup lang="ts">
import type { FormSubmitEvent } from "@nuxt/ui";
import { useAuth } from "~/composables/useAuth";
import type { User } from "~~/shared/types/user";

definePageMeta({
  middleware: "guest",
});

const { login } = useAuth();

const state = reactive({
  name: "",
  email: "",
  apiKey: "",
});

const handleSubmit = async (
  event: FormSubmitEvent<{ name: string; email: string; apiKey: string }>,
) => {
  const newUser: User = {
    id: 1,
    name: event.data.name,
    email: event.data.email,
    apiKey: event.data.apiKey,
    faction: null,
  };
  login(newUser);
};
</script>

<template>
  <div class="flex flex-col items-center justify-center gap-4 p-4">
    <UCard class="w-full max-w-md">
      <template #header>
        <div class="text-lg font-semibold text-center">Welcome to Tornster</div>
      </template>
      <UForm
        :state="state"
        @submit="handleSubmit"
        class="space-y-4 flex flex-col items-center"
      >
        <UFormField label="Name" name="name">
          <UInput v-model="state.name" />
        </UFormField>
        <UFormField label="Email" name="email">
          <UInput v-model="state.email" />
        </UFormField>
        <UFormField label="API Key" name="apiKey">
          <UInput v-model="state.apiKey" />
        </UFormField>
        <UButton size="xl" type="submit" color="primary" class="mt-4">
          Login
        </UButton>
      </UForm>
    </UCard>
  </div>
</template>
