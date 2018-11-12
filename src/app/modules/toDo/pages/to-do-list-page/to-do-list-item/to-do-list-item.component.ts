import { GlobalService } from "./../../../../../shared/services/global.service";
import { TODoList } from "./../../../shared/toDo.model";
import { ToDoService } from "./../../../shared/toDo.service";

import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-to-do-list-item",
  templateUrl: "./to-do-list-item.component.html",
  styleUrls: ["./to-do-list-item.component.css"]
})
export class ToDoListItemComponent implements OnInit {
  @Input()
  todo: TODoList;

  checked: string[] = [];

  contacts = [];

  filter = false;
  checkBoxActive = false;
  active;
  ischecked;

  selectAll = true;

  ar: any[] = [];
  numbers = [1, 2, 3];

  constructor(
    public _toDoService: ToDoService,
    private _globalService: GlobalService
  ) {}

  ngOnInit() {
    // this.ar.push("four");
    // this.ar.push("five");
    // console.log(this.ar);
    // console.log(this.ar);
    // this._globalService.data$.subscribe(data => {
    //   if (data.ev === "addAllCheck") {
    //     console.log("add all to remove it");
    //   } else if (data.ev === "removeAllCheck") {
    //     console.log("remove all to remove it");
    //   }
    // });
  }

  onFilterChange(eve: any) {
    console.log(eve);
    this.filter = !this.filter;
  }

  onChangeCategory(event, index) {
    // console.log(index);
    // const index = this.checked.indexOf(post);
    // this.checkedId = event.target.value;
    if (event.target.checked) {
      index.toggle === "on" ? (index.toggle = "off") : (index.toggle = "on");

      // console.log("added");
    } else {
      // index.toggle === "on" ? (index.toggle = "on") : (index.toggle = "off");
      index.toggle === "off" ? (index.toggle = "on") : (index.toggle = "off");
      // console.log("remove");
    }

    this._globalService.data$.subscribe(data => {
      if (data.ev === "removeIndex") {
        if (index.toggle === "on") {
          this._toDoService.deleteTodo(index.id);
        }
      }
      // if (data.ev === "addAllCheck") {
      //   console.log("add all to remove it");
      // } else if (data.ev === "removeAllCheck") {
      //   console.log("remove all to remove it");
      // }
    });
  }

  switch(index) {
    // console.log(index);

    this.ar.push(index.id);

    console.log(this.ar);
    // this._toDoService.deleteTodo(index.id);
  }
}
