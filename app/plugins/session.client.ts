export default defineNuxtPlugin(() => {
  const { user } = useSessionMock();

  const stored = localStorage.getItem("mock-session");
  if (stored && !user.value) {
    user.value = JSON.parse(stored);
  }
});
