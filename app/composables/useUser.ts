import { useSessionMock } from "./useSessionMock";

export const useUser = () => {
  const { user } = useSessionMock();

  const setFactionId = (factionId: number) => {
    const newData = { ...user.value, faction: factionId };
    localStorage.setItem("mock-session", JSON.stringify(newData));
  };

  return { user, setFactionId };
};
