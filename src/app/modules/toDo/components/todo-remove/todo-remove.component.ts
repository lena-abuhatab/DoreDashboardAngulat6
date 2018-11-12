import { TODoList } from "./../../shared/toDo.model";
import { ToDoService } from "./../../shared/toDo.service";
import { ActivatedRoute, ParamMap } from "@angular/router";
import { GlobalService } from "./../../../../shared/services/global.service";
import { Component, OnInit, Input } from "@angular/core";
import { modalDialog } from "../../../../shared/helpers/utils.helper";

@Component({
  selector: "app-todo-remove",
  templateUrl: "./todo-remove.component.html",
  styleUrls: ["./todo-remove.component.css"],
  animations: [modalDialog]
})
export class TodoRemoveComponent implements OnInit {
  @Input()
  showModal: any;

  todo;

  constructor(
    private _globalService: GlobalService,
    private route: ActivatedRoute,
    public _toDoService: ToDoService
  ) {}

  ngOnInit() {
    const todoId = this.route.snapshot.params["id"];

    this._toDoService.getTodo(todoId).subscribe(toData => {
      this.todo = toData;
    });
  }

  onCloseModal() {
    this._globalService.dataBusChanged("closeModal", false);
  }
}
