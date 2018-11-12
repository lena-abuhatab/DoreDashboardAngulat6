import { ActivatedRoute, ParamMap } from "@angular/router";
import { ErrorService } from "./../../../../../shared/services/error.service";
import { Subscription } from "rxjs";
import { GlobalService } from "./../../../../../shared/services/global.service";
import { TODoList } from "./../../../shared/toDo.model";
import { ToDoService } from "./../../../shared/toDo.service";
import { NgForm } from "@angular/forms";
import { Component, OnInit, OnDestroy, Input } from "@angular/core";

@Component({
  selector: "app-to-do-create",
  templateUrl: "./to-do-create.component.html",
  styleUrls: ["./to-do-create.component.css"]
})
export class ToDoCreateComponent implements OnInit, OnDestroy {
  message;
  data: { message: string };

  isLoadingFirst = false;

  private errorSub: Subscription;
  private mode = "create";
  private todoId: string;
  @Input()
  todo: TODoList;

  constructor(
    private _toDoService: ToDoService,
    private _globalService: GlobalService,
    private errorService: ErrorService,
    public route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.errorSub = this.errorService.getErrorListener().subscribe(message => {
      this.data = { message: message };
      this.message = message;
      this.isLoadingFirst = false;
    });

    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      if (paramMap.has("id")) {
        this.mode = "edit";
        this.todoId = paramMap.get("id");
        this._toDoService.getTodo(this.todoId).subscribe((toData: TODoList) => {
          this.todo = toData;
        });
      } else {
        this.mode = "create";
        this.todoId = null;
      }
    });

    this._globalService.data$.subscribe(
      data => {
        if (data.ev === "isloaded") {
          this.isLoadingFirst = false;
        }
      },
      error => {
        console.log("Error: " + error);
      }
    );
  }

  onAddPost(todo: TODoList) {
    this.isLoadingFirst = true;
    if (this.mode === "create") {
      this._toDoService.addTodo(todo);
      console.log(todo.todo_date);
    } else {
      this._toDoService.updateTodo(todo, this.todoId);
    }
    // console.log(todo);
  }
  onCloseModal() {
    this._globalService.dataBusChanged("closeModal", false);
  }
  onHandleError() {
    this.errorService.handleError();
  }

  ngOnDestroy() {
    this.errorSub.unsubscribe();
  }
}
