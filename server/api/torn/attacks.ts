import { BASE_URL } from "./constants";
import { AttacksResponse } from "#shared/types/torn/attack";

export default defineEventHandler(async (event) => {
  const { tornApiKey } = useRuntimeConfig();

  const url = `${BASE_URL}/user/attacks?limit=100?key=${tornApiKey}`;

  console.log("API KEY", tornApiKey);

  try {
    const res = await $fetch<AttacksResponse>(url, {
      headers: {
        Authorization: `ApiKey ${tornApiKey}`,
      },
    });

    return {
      attacks: res.attacks || {},
    };
  } catch (error) {
    throw createError({
      statusCode: 500,
      statusMessage: "Failed to fetch attacks data from Torn API",
    });
  }
});
