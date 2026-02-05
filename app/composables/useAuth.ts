import type { User } from "~~/shared/types/user";
import { useSessionMock } from "./useSessionMock";
import { ROUTES } from "~/constants";

export const useAuth = () => {
  const { user } = useSessionMock();

  const login = async (loginUser: User) => {
    // simulate server latency
    await new Promise((r) => setTimeout(r, 300));

    user.value = loginUser;
    localStorage.setItem("mock-session", JSON.stringify(loginUser));
    navigateTo(ROUTES.HOME);
  };

  const logout = async () => {
    user.value = null;
    localStorage.removeItem("mock-session");
    navigateTo(ROUTES.LOGIN);
  };

  return {
    login,
    logout,
  };
};
