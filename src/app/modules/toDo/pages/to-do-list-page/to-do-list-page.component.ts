import { ActivatedRoute, Router } from "@angular/router";

import { TODoList } from "./../../shared/toDo.model";
import { ToDoService } from "./../../shared/toDo.service";
import { GlobalService } from "./../../../../shared/services/global.service";
import { Component, OnInit, OnDestroy } from "@angular/core";

import { switchMap } from "rxjs/operators";

import { from, Subscription } from "rxjs";
import { flatMap, groupBy, reduce } from "rxjs/operators";
import * as _ from "lodash";
@Component({
  selector: "app-to-do-list-page",
  templateUrl: "./to-do-list-page.component.html",
  styleUrls: ["./to-do-list-page.component.css"]
})
export class ToDoListPageComponent implements OnInit, OnDestroy {
  todotest: any[] = [
    {
      id: "1",
      todo_name: "Developer Survey",
      todo_categories: "Personal",
      todo_labels: "ON HOLD",
      todo_description: "This is the first post's content",
      todo_date: "12 / 27 / 2018"
    },
    {
      id: "2",
      todo_name: "Designer Survey",
      todo_categories: "Store",
      todo_labels: "PROCESSED",
      todo_description: "This is the first post's content",
      todo_date: "12 / 27 / 2018"
    }
  ];
  showModal = false;

  todo: TODoList[] = null;
  filteredTodoList: TODoList[] = null;
  filteredrightTodoList: TODoList[] = null;
  private todoSub: Subscription;

  category: string;
  label: string;

  public globalSearchTerm;

  grouped: any = [];

  filters = {};

  groupRowsBy = "todo_categories";

  constructor(
    private _globalService: GlobalService,
    public _toDoService: ToDoService,
    private _route: ActivatedRoute,
    private _router: Router
  ) {}

  ngOnInit() {
    this._toDoService.getTodos();
    this.todoSub = this._toDoService
      .getTodoUpdateListener()
      .subscribe((params: TODoList[]) => {
        this.todo = params;
        // .sort((a, b) => {
        //   const nameA = JSON.stringify([a.todo_name]).toLowerCase();
        //   const nameB = JSON.stringify([b.todo_name]).toLowerCase();
        //   if (nameA < nameB) {
        //     return -1;
        //   }
        //   if (nameA > nameB) {
        //     return 1;
        //   }
        //   return 0;
        // });
        // console.log(params.map(date => date.todo_date));
        // console.log(this.todo);

        this.setFilters();
      });

    // this._toDoService.getTodos().subscribe(todo => {
    //   this.todo = todo;
    // });

    this._globalService.data$.subscribe(
      data => {
        if (data.ev === "isModal") {
          this.showModal = true;
        }
        if (data.ev === "closeModal") {
          this.showModal = false;
        }
      },
      error => {
        console.log("Error: " + error);
      }
    );
    this.populateTodoList();
  }

  private setFilters() {
    this.filteredTodoList = _.filter(this.todo, _.conforms(this.filters));
  }

  private populateTodoList() {
    this._toDoService
      .getTodoUpdateListener()
      .pipe(
        switchMap(toDo => {
          this.todo = toDo;
          return this._route.queryParamMap;
        })
      )
      .subscribe(params => {
        this.category = params.get("categorie_filter");
        this.label = params.get("label_filter");
        // console.log("im here");
        this.applyFilter();
        // this.dorightFilter();
        // this.filteredrightTodoList = this.filteredTodoList;
      });
  }

  private filterMatch(property: string, value: any) {
    // console.log(property + value);
    this.filters[property] = i => i === value;
    this.setFilters();
  }
  private applyFilter() {
    // this.numberOfProduct = this.products.filter(
    //   p => p.product_size === +this.category
    // ).length;
    // this.filteredProducts.map(p => p.product_name).sort(this.sortStrings);
    if (this.category) {
      this.filterMatch("todo_categories", this.category);
    }
    if (this.label) {
      this.filterMatch("todo_labels", this.label);
    }
  }

  onGlobalSearch($event): void {
    this.globalSearchTerm = $event;

    // this.emitEvent(Event.onGlobalSearch, $event);
  }

  sortByNameAsc(): void {
    this.filteredTodoList = [
      ...this.filteredTodoList.sort((a, b) => {
        const nameA = a.todo_name.toLowerCase();
        const nameB = b.todo_name.toLowerCase();
        return nameA.localeCompare(nameB);
      })
    ];
  }

  sortByNameDesc(): void {
    this.filteredTodoList = [
      ...this.filteredTodoList.sort((a, b) => {
        const nameA = a.todo_name.toLowerCase();
        const nameB = b.todo_name.toLowerCase();
        return nameB.localeCompare(nameA);
      })
    ];
  }

  reset(): void {
    this.filteredTodoList = [...this.todo];

    // this._router.navigate([], {
    //   queryParams: { page: null },
    //   queryParamsHandling: "merge"
    // });
    this._router.navigate(["."], { relativeTo: this._route, queryParams: {} });
  }

  ngOnDestroy() {
    this.todoSub.unsubscribe();
  }

  private dorightFilter() {
    this.grouped = [];
    from([...this.filteredTodoList])
      .pipe(
        groupBy(row => row[this.groupRowsBy]),
        flatMap(group =>
          group.pipe(reduce((acc: object[], curr) => [...acc, curr], []))
        )
      )
      .subscribe(row => this.grouped.push(row));
  }
}
