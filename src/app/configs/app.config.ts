import { InjectionToken } from "@angular/core";

export let APP_CONFIG = new InjectionToken("app.config");

import { orders } from "../../assets/data";
export const AppConfig: any = {
  routes: {
    heroes: "heroes",
    error404: "404"
  },
  endpoints: {
    heroes: "https://nodejs-example-app.herokuapp.com/heroes",
    order: orders
  },
  votesLimit: 3,
  topHeroesLimit: 4,
  snackBarDuration: 3000,
  repositoryURL: "https://github.com/ismaestro/angular6-example-app"
};
