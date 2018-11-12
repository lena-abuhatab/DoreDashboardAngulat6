export let MENU_ITEM = [
  {
    path: "./",
    title: "Dashboard",
    icon: "Shop-4"
  },
  {
    path: "layouts",
    title: "Layouts",
    icon: "Digital-Drawing",
    children: [
      {
        path: "Layouts.List.html",
        title: "Data List",
        icon: "simple-icon-credit-card"
      },
      {
        path: "Layouts.Thumbs.html",
        title: "Thumb List",
        icon: "simple-icon-list"
      },
      {
        path: "Layouts.Images.html",
        title: "Image List",
        icon: "simple-icon-grid"
      },
      {
        path: "Layouts.Details.html",
        title: "Details",
        icon: "simple-icon-book-open"
      },
      {
        path: "Layouts.Search.html",
        title: "Search",
        icon: "simple-icon-magnifier"
      },
      {
        path: "Layouts.Login.html",
        title: "Login",
        icon: "simple-icon-user-following"
      },
      {
        path: "Layouts.Register.html",
        title: "Register",
        icon: "simple-icon-user-follow"
      },
      {
        path: "Layouts.ForgotPassword.html",
        title: "Forgot Password",
        icon: "simple-icon-user-unfollow"
      },
      {
        path: "Layouts.Error.html",
        title: "Error",
        icon: "simple-icon-exclamation"
      }
    ]
  },
  {
    path: "applications",
    title: "Applications",
    icon: "Air-Balloon",
    children: [
      {
        path: "Apps.Todo.List",
        title: "Todo",
        icon: "simple-icon-check"
      },
      {
        path: "Apps.Survey.List.html",
        title: "Survey",
        icon: "simple-icon-calculator"
      },
      {
        path: "Apps.Chat.html",
        title: "Chat",
        icon: "simple-icon-bubbles"
      }
    ]
  },
  {
    path: "ui",
    title: "UI",
    icon: "Pantone"
  },
  {
    path: "menu",
    title: "Menu",
    icon: "Three-ArrowFork",
    children: [
      {
        path: "Menu.Default.html",
        title: "Default",
        icon: "simple-icon-control-pause"
      },
      {
        path: "Menu.Subhidden.html",
        title: "Subhidden",
        icon: "simple-icon-arrow-left mi-subhidden"
      },
      {
        path: "Menu.Hidden.html",
        title: "Hidden",
        icon: "simple-icon-control-start mi-hidden"
      }
    ]
  }
];
