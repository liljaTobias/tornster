import { BASE_URL } from "../constants";
import type { FactionWar } from "#shared/types/torn/faction";

type FactionWarResponse = {
  rankedwars: FactionWar[];
};

export default defineEventHandler(async (event) => {
  const auth = getHeader(event, "Authorization") ?? "";
  const { ID } = getQuery(event);

  if (ID) {
    const res = await $fetch<FactionWarResponse>(
      `${BASE_URL}/faction/${ID}/rankedwars`,
      {
        headers: {
          Authorization: auth,
        },
      },
    );

    return res.rankedwars;
  }

  const res = await $fetch<FactionWarResponse>(
    `${BASE_URL}/faction/rankedwars`,
    {
      headers: {
        Authorization: auth,
      },
    },
  );

  return res.rankedwars;
});
