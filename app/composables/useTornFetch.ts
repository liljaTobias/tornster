export const useTornFetch = <T>(
  url: string,
  options: Parameters<typeof useFetch<T>>[1] = {},
) => {
  const { user } = useSessionMock();

  return useFetch<T>(url, {
    ...options,
    headers: {
      ...options?.headers,
      ...(user.value && {
        Authorization: `ApiKey ${user.value.apiKey}`, // mock token for now
      }),
    },
  });
};
