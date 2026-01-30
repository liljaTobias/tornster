import { Faction } from "#shared/types/torn/attack";
import { BASE_URL } from "../constants";

type FactionBasicResponse = {
  basic: Faction;
};

export default defineEventHandler(async (event) => {
  const { tornApiKey } = useRuntimeConfig();
  const { ID } = getQuery(event);

  if (!tornApiKey) {
    throw createError("No API key");
  }

  const res = await $fetch<FactionBasicResponse>(
    `${BASE_URL}/faction/${ID}/basic`,
    {
      headers: {
        Authorization: `ApiKey ${tornApiKey}`,
      },
    },
  );

  return res.basic;
});
