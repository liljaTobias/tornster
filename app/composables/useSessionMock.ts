import type { User } from "~~/shared/types/user";

export const useSessionMock = () => {
  const user = useState<User | null>("auth:user", () => null);

  const loggedIn = computed(() => !!user.value);

  return { user, loggedIn };
};
