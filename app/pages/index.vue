<template>
  <div class="space-y-8">
    <!-- Welcome Section -->
    <div
      class="bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg shadow-lg p-8 text-white"
    >
      <h2 class="text-3xl font-bold mb-2">Welcome to Tornster</h2>
      <p class="text-blue-100">Your productivity dashboard starts here</p>
    </div>

    <!-- Stats Grid -->
    <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
      <UCard>
        <template #header>
          <div class="text-gray-500 text-sm font-medium">Total Projects</div>
        </template>
        <div class="text-3xl font-bold text-gray-900 dark:text-white">12</div>
        <template #footer>
          <p class="text-xs text-gray-400">+2 this month</p>
        </template>
      </UCard>

      <UCard>
        <template #header>
          <div class="text-gray-500 text-sm font-medium">Active Tasks</div>
        </template>
        <div class="text-3xl font-bold text-blue-600">24</div>
        <template #footer>
          <p class="text-xs text-gray-400">In progress</p>
        </template>
      </UCard>

      <UCard>
        <template #header>
          <div class="text-gray-500 text-sm font-medium">Completed</div>
        </template>
        <div class="text-3xl font-bold text-green-600">156</div>
        <template #footer>
          <p class="text-xs text-gray-400">This year</p>
        </template>
      </UCard>

      <UCard>
        <template #header>
          <div class="text-gray-500 text-sm font-medium">Team Members</div>
        </template>
        <div class="text-3xl font-bold text-purple-600">8</div>
        <template #footer>
          <p class="text-xs text-gray-400">All active</p>
        </template>
      </UCard>
    </div>

    <!-- Recent Activity -->
    <UCard>
      <template #header>
        <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
          Recent Activity
        </h3>
      </template>
      <div class="space-y-4">
        <div
          class="flex items-center justify-between border-b border-gray-200 dark:border-gray-700 pb-4"
        >
          <div>
            <p class="font-medium text-gray-900 dark:text-white">
              Project kickoff meeting
            </p>
            <p class="text-sm text-gray-500">Team collaboration</p>
          </div>
          <UBadge color="blue" variant="soft">Today</UBadge>
        </div>
        <div
          class="flex items-center justify-between border-b border-gray-200 dark:border-gray-700 pb-4"
        >
          <div>
            <p class="font-medium text-gray-900 dark:text-white">
              Design mockups approved
            </p>
            <p class="text-sm text-gray-500">Development ready</p>
          </div>
          <UBadge color="green" variant="soft">Yesterday</UBadge>
        </div>
        <div class="flex items-center justify-between">
          <div>
            <p class="font-medium text-gray-900 dark:text-white">
              Feature implementation started
            </p>
            <p class="text-sm text-gray-500">In progress</p>
          </div>
          <UBadge color="orange" variant="soft">2 days ago</UBadge>
        </div>
      </div>
    </UCard>

    <!-- Action Buttons -->
    <div class="flex gap-3">
      <UButton size="lg" icon="i-heroicons-plus-20-solid">New Project</UButton>
      <UButton size="lg" color="gray" variant="outline"
        >View Documentation</UButton
      >
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "default",
});
</script>
