import { BASE_URL } from "../constants";
import type { FactionWar } from "#shared/types/torn/faction";

type FactionWarResponse = {
  rankedwars: FactionWar[];
};

export default defineEventHandler(async (event) => {
  const { ID } = getQuery(event);
  const auth = getHeader(event, "Authorization");

  if (!ID) {
    throw createError("No ID provided");
  }

  const res = await $fetch<FactionWarResponse>(
    `${BASE_URL}/faction/${ID}/rankedwars`,
    {
      headers: {
        Authorization: auth || "",
      },
    },
  );

  console.log(res);

  return res.rankedwars;
});
