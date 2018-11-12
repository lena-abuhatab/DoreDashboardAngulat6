import { TODoList } from "./../../../../modules/toDo/shared/toDo.model";
import { ToDoService } from "./../../../../modules/toDo/shared/toDo.service";
import { Component, OnInit, Input, OnDestroy } from "@angular/core";

import { from, Subscription } from "rxjs";
import { flatMap, groupBy, reduce } from "rxjs/operators";
@Component({
  selector: "app-r-filter-item",
  templateUrl: "./r-filter-item.component.html",
  styleUrls: ["./r-filter-item.component.css"]
})
export class RFilterItemComponent implements OnInit, OnDestroy {
  grouped: any = [];

  @Input()
  groupRowsBy: string;

  @Input()
  filterTitle: string;

  @Input()
  groupTitle: string;

  @Input()
  groupTitle2: string;

  @Input()
  todo;

  private todoSub: Subscription;

  constructor(public _toDoService: ToDoService) {}

  ngOnInit() {
    // this._toDoService.getTodos();
    // this.todoSub = this._toDoService
    //   .getTodoUpdateListener()
    //   .subscribe(params => {
    //     this.todo = params;
    //   });
    this.dorightFilter();
  }

  private dorightFilter() {
    this.grouped = [];
    from([...this.todo])
      .pipe(
        groupBy(row => row[this.groupRowsBy]),
        flatMap(group =>
          group.pipe(reduce((acc: object[], curr) => [...acc, curr], []))
        )
      )
      .subscribe(row => this.grouped.push(row));
  }

  ngOnDestroy() {
    // this.todoSub.unsubscribe();
  }
}
