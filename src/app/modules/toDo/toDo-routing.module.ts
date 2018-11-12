import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ToDoListPageComponent } from "./pages/to-do-list-page/to-do-list-page.component";
// import {HeroDetailPageComponent} from './pages/hero-detail-page/hero-detail-page.component';
import { ToDoDetailPageComponent } from "./pages/to-do-detail-page/to-do-detail-page.component";

const toDORoutes: Routes = [
  { path: "", component: ToDoListPageComponent },
  { path: ":id", component: ToDoDetailPageComponent }
];

@NgModule({
  imports: [RouterModule.forChild(toDORoutes)],
  exports: [RouterModule]
})
export class ToDoRoutingModule {}
