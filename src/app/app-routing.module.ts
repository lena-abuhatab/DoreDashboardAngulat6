import { LoginComponent } from "./shared/pages/login/login.component";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { Error404PageComponent } from "./shared/pages/error404-page/error404-page.component";
import { HomePageComponent } from "./shared/pages/home-page/home-page.component";
import { AppConfig } from "./configs/app.config";

const routes: Routes = [
  {
    path: "",
    component: HomePageComponent,
    children: [{ path: "", component: HomePageComponent, pathMatch: "full" }]
  },
  { path: "", component: HomePageComponent },
  {
    path: "Apps.Todo.List",
    loadChildren: "./modules/toDo/toDo.module#ToDOModule"
  },
  // { path: "Apps.Todo.List", component: ToDoComponent },
  { path: "ui", component: LoginComponent },
  // { path: ":id", component: TableDetailsComponent },
  { path: "menu", component: LoginComponent },
  { path: AppConfig.routes.error404, component: Error404PageComponent },

  // otherwise redirect to 404
  { path: "**", redirectTo: "/" + AppConfig.routes.error404 }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: "enabled",
      anchorScrolling: "enabled"
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
