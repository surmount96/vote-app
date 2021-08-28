import guest from '@/router/middleware/guest'

const publicRoutes = [
  {
    path: "/",
    component: () => import(/* webpackChunckName: 'Login'*/ "./Login.vue"),

  },
  {
    path: "/login",
    name: "Login",
    component: () => import(/* webpackChunckName: 'Login'*/ "./Login.vue"),
    meta: {
      middleware: [guest]
    },
  },
  // {
  //   path: "/signup",
  //   name: "SignUp",
  //   component: () => import(/* webpackChunckName: 'Signup'*/ "./SignUp.vue")
  // },
  // {
  //   path: "/forgot-password",
  //   name: "ForgotPassword",
  //   component: () =>
  //     import(/* webpackChunckName: 'ForgotPassword'*/ "./ForgotPassword.vue")
  // },
  // {
  //   path: "/",
  //   name: "Index",
  //   component: () =>
  //     import(/* webpackChunckName: 'Index'*/ "./Index.vue")
  // }
];
export default publicRoutes;
