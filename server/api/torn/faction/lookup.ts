import { BASE_URL } from "../constants";

export default defineEventHandler(async (event) => {
  const { tornApiKey } = useRuntimeConfig();

  if (!tornApiKey) {
    throw createError("No API key");
  }

  const res = await $fetch(`${BASE_URL}/faction/lookup`, {
    headers: {
      Authorization: `ApiKey ${tornApiKey}`,
    },
  });

  console.log("Faction response:", res);

  return res;
});
