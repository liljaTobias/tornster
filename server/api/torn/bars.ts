import { BASE_URL } from "./constants";
import type { Bars } from "#shared/types/torn/bars";

type BarsResponse = {
  bars: Bars;
};

export default defineEventHandler(async (event) => {
  const { tornApiKey } = useRuntimeConfig();

  if (!tornApiKey) {
    throw createError("No API key");
  }

  const res = await $fetch<BarsResponse>(`${BASE_URL}/user/bars`, {
    headers: {
      Authorization: `ApiKey ${tornApiKey}`,
    },
  });

  console.log("Bars response:", res);

  return res.bars;
});
