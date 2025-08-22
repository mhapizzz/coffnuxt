export default defineNuxtRouteMiddleware((to, _from) => {
  // const token = useCookie("token");

  // // Kalau tidak ada token dan bukan di halaman login/register
  // if (!token.value && to.path !== "/login" && to.path !== "/register") {
  //   return navigateTo("/login");
  // }

  // // Kalau sudah login dan masuk ke login/register, redirect ke homepage
  // if (token.value && (to.path === "/login" || to.path === "/register")) {
  //   return navigateTo("/");
  // }
});
