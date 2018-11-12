import { GlobalService } from "./../../../../shared/services/global.service";
import { ToDoService } from "./../../shared/toDo.service";
import { TODoList } from "./../../shared/toDo.model";
import { ActivatedRoute, ParamMap, Router } from "@angular/router";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-to-do-detail-page",
  templateUrl: "./to-do-detail-page.component.html",
  styleUrls: ["./to-do-detail-page.component.css"]
})
export class ToDoDetailPageComponent implements OnInit {
  showDefaultModal = false;
  resultSearch: string;

  todo: TODoList;
  showModal = false;

  private todoId: string;
  constructor(
    private route: ActivatedRoute,
    public _toDoService: ToDoService,
    private router: Router,
    private _globalService: GlobalService
  ) {}

  order;
  ngOnInit() {
    this.todoId = this.route.snapshot.params["id"];
    // this.route.params.subscribe(params => {
    //   this.todoId = params["id"];
    // });
    console.log(this.todoId);
    this._toDoService.getTodo(this.todoId).subscribe((toData: TODoList) => {
      this.todo = toData;
    });

    this.closeDefaultModal();
  }

  private closeDefaultModal() {
    this._globalService.data$.subscribe(
      data => {
        if (data.ev === "closeModal") {
          this.showDefaultModal = false;
          this.showModal = false;
        }
      },
      error => {
        console.log("Error: " + error);
      }
    );
  }
  deleteTodo() {
    this.showModal = true;
  }
  onDelete() {
    this._toDoService.deleteTodo(this.todoId);
    this.router.navigate(["/Apps.Todo.List"]);
  }

  onOpenModal() {
    this.showDefaultModal = true;
  }
}
