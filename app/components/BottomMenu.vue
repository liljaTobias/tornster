<script setup lang="ts">
import { Home, Swords, Users, User } from "lucide-vue-next";
import { ROUTES } from "~/constants";

const route = useRoute();

const items = [
  {
    label: "Home",
    to: ROUTES.HOME,
    icon: Home,
  },
  {
    label: "Wars",
    to: ROUTES.WARS,
    icon: Swords,
  },
  {
    label: "Faction",
    to: ROUTES.FACTIONS,
    icon: Users,
  },
  {
    label: "Profile",
    to: ROUTES.PROFILE,
    icon: User,
  },
];

const isActive = (to: string) => route.path === to;
</script>

<template>
  <nav
    class="fixed inset-x-0 bottom-4 z-50 flex justify-center pointer-events-none"
  >
    <div
      class="pointer-events-auto w-[95%] max-w-xl rounded-2xl bg-white backdrop-blur shadow-lg dark:bg-gray-800"
    >
      <ul class="flex justify-around px-4 py-2">
        <li v-for="item in items" :key="item.to" class="flex-1">
          <NuxtLink
            :to="item.to"
            class="flex flex-col items-center gap-1 rounded-xl px-2 py-2 text-xs transition"
            :class="
              isActive(item.to)
                ? 'text-primary'
                : 'text-gray-500 hover:text-gray-800'
            "
          >
            <component :is="item.icon" class="h-5 w-5" />
            <span class="hidden sm:block">
              {{ item.label }}
            </span>
          </NuxtLink>
        </li>
      </ul>
    </div>
  </nav>
</template>
