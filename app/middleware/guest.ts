export default defineNuxtRouteMiddleware(() => {
  const { loggedIn } = useSessionMock();

  if (loggedIn.value) {
    return navigateTo("/");
  }
});
