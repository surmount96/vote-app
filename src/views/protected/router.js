const protectedRoutes = [
  {
    path: "/wizard-guide",
    name: "WizardSetup",
    meta: { requiresAuth: true },
    component: () =>
      import(
        /* webpackChunkName: "wizard-setup"*/ "./wizard-process/WizardSetup.vue"
      )
  },
  {
    path: "/setup",
    name: "Home",
    meta: { requiresAuth: true },
    component: () =>
      import(/* webpackChunkName: "home-stage"*/ "./wizard-process/Home.vue")
  },
  {
    path: "",
    name: "Dashboard",
    meta: { requiresAuth: true },
    component: () =>
      import(/* webpackChunkName: "Dashbpard"*/ "./user/Dashboard.vue"),
    children: [
      {
        path: "/dashboard",
        name: "Index",
        meta: { requiresAuth: true },
        component: () =>
          import(/* webpackChunkName: "Index"*/ "./user/Index.vue")
      },
      {
        path: "/voting-group",
        name: "VotingGroup",
        meta: { requiresAuth: true },
        component: () =>
          import(/* webpackChunkName: "VotingGroup"*/ "./user/VotingGroup.vue")
      },
      {
        path: "/ballot-generator",
        name: "BallotGenerator",
        meta: { requiresAuth: true },
        component: () =>
          import(/* webpackChunkName: "BallotGenerator"*/ "./user/BallotGenerator.vue")
      },
      {
        path: "/physical-voting",
        name: "PhysicalVoting",
        meta: { requiresAuth: true },
        component: () =>
          import(/* webpackChunkName: "PhysicalVoting"*/ "./user/PhysicalVoting.vue")
      },
      {
        path: "/vote-nominees",
        name: "VoteNominees",
        meta: { requiresAuth: true },
        component: () =>
          import(/* webpackChunkName: "VoteNominees"*/ "./user/VoteNominees.vue")
      },
      {
        path: "/vote-post",
        name: "VotePost",
        meta: { requiresAuth: true },
        component: () =>
          import(/* webpackChunkName: "VotePost"*/ "./user/VotePost.vue")
      },
      {
        path: "/vote-members",
        name: "VotingMembers",
        meta: { requiresAuth: true },
        component: () =>
          import(/* webpackChunkName: "VotingMembers"*/ "./user/VotingMembers.vue")
      },
      {
        path: "/settings",
        name: "Settings",
        meta: { requiresAuth: true },
        component: () =>
          import(/* webpackChunkName: "Settings"*/ "./user/Settings.vue")
      },
      {
        path: "/voting-result",
        name: "VotingResult",
        meta: { requiresAuth: true },
        component: () =>
          import(/* webpackChunkName: "VotingResult"*/ "./user/VotingResult.vue")
      },
    ]
  },
  {
    path: "/vote",
    name: "Home",
    meta: { requiresAuth: true },
    component: () =>
      import(/* webpackChunkName: "home-stage"*/ "./polls/Index.vue")
  },
];
export default protectedRoutes;
