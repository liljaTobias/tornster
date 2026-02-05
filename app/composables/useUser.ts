import { useSessionMock } from "./useSessionMock";

export const useUser = () => {
  const { user } = useSessionMock();
  return user;
};
