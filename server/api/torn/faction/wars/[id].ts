import { BASE_URL } from "../../constants";
import { RankedWarReport } from "#shared/types/torn/war";

type RankedWarResponse = {
  rankedwarreport: RankedWarReport;
};

export default defineEventHandler(async (event) => {
  const id = event.context.params?.id as string;
  const { tornApiKey } = useRuntimeConfig();

  if (!tornApiKey || !id) {
    throw createError("No ID or API key provided");
  }

  const res = await $fetch<RankedWarResponse>(
    `${BASE_URL}/faction/${id}/rankedwarreport`,
    {
      headers: {
        Authorization: `ApiKey ${tornApiKey}`,
      },
    },
  );

  return res.rankedwarreport;
});
