import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ToDoRoutingModule } from "./toDo-routing.module";

import { ToDoListItemComponent } from "./pages/to-do-list-page/to-do-list-item/to-do-list-item.component";
import { ToDoListPageComponent } from "./pages/to-do-list-page/to-do-list-page.component";
import { ToDoCreateComponent } from "./pages/to-do-list-page/to-do-create/to-do-create.component";
import { ToDoDetailPageComponent } from "./pages/to-do-detail-page/to-do-detail-page.component";

import { BsDatepickerModule } from "ngx-bootstrap/datepicker";

import { SharedModule } from "./../../shared/shared.module";
import { ToDoEditComponent } from "src/app/modules/toDo/pages/to-do-list-page/to-do-edit/to-do-edit.component";
import { TodoRemoveComponent } from "./components/todo-remove/todo-remove.component";
@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    ToDoRoutingModule,
    SharedModule,
    BsDatepickerModule.forRoot()
  ],
  declarations: [
    ToDoListPageComponent,
    ToDoListItemComponent,
    ToDoCreateComponent,
    ToDoDetailPageComponent,
    ToDoEditComponent,
    TodoRemoveComponent
  ],
  entryComponents: [
    // HeroRemoveComponent
  ]
})
export class ToDOModule {}
