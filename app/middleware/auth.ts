import { ROUTES } from "~/constants";

export default defineNuxtRouteMiddleware(() => {
  const { loggedIn } = useSessionMock();

  if (!loggedIn.value) {
    return navigateTo(ROUTES.LOGIN);
  }
});
