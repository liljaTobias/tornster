import { BASE_URL } from "./constants";
import { UserProfileResponse } from "#shared/types/torn/user";

export default defineEventHandler(async (event) => {
  const url = `${BASE_URL}/user/basic`;
  const auth = getHeader(event, "Authorization");

  try {
    const res = await $fetch<UserProfileResponse>(url, {
      headers: {
        Authorization: auth || "",
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
