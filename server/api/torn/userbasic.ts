import { BASE_URL } from "./constants";
import { UserProfileResponse } from "#shared/types/torn/user";

export default defineEventHandler(async (event) => {
  const { tornApiKey } = useRuntimeConfig();

  const url = `${BASE_URL}/user/basic`;

  try {
    const res = await $fetch<UserProfileResponse>(url, {
      headers: {
        Authorization: `ApiKey ${tornApiKey}`,
      },
    });

    return res.profile;
  } catch (error) {
    throw createError({
      statusCode: 500,
      statusMessage: "Failed to fetch attacks data from Torn API",
    });
  }
});
