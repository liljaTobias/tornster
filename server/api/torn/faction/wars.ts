import { BASE_URL } from "../constants";
import type { FactionWar } from "#shared/types/torn/faction";

type FactionWarResponse = {
  rankedwars: FactionWar[];
};

export default defineEventHandler(async (event) => {
  const { tornApiKey } = useRuntimeConfig();
  const { ID } = getQuery(event);

  if (!tornApiKey || !ID) {
    throw createError("No API key or ID provided");
  }

  const res = await $fetch<FactionWarResponse>(
    `${BASE_URL}/faction/${ID}/rankedwars`,
    {
      headers: {
        Authorization: `ApiKey ${tornApiKey}`,
      },
    },
  );

  console.log(res);

  return res.rankedwars;
});
