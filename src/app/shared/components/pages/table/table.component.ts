import { Event } from "./../../../modules/event.enum";
import { Columns } from "./../../../modules/columns";
import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
@Component({
  selector: "app-table",
  templateUrl: "./table.component.html",
  styleUrls: ["./table.component.css"]
})
export class TableComponent implements OnInit {
  public term;

  sIndex: number;

  @Input()
  columns: Columns[] = [];

  @Input()
  data: any[];

  @Output()
  event = new EventEmitter();

  sortByIcon: { key: string } & { order: string } = {
    key: "",
    order: "asc"
  };
  sortBy: { key: string } & { order: string } = {
    key: "",
    order: "asc"
  };
  constructor() {}

  ngOnInit() {
    // const search = localStorage.getItem(Event.onSearch);
    // if (search) {
    //   this.term = JSON.parse(search);
    // }
  }

  orderBy(column: Columns): void {
    const key = column.key;

    this.sortByIcon.key = key;
    if (this.sortByIcon.order === "asc") {
      this.sortByIcon.order = "desc";
    } else {
      this.sortByIcon.order = "asc";
    }

    this.sortBy.key = this.sortByIcon.key;
    this.sortBy.order = this.sortByIcon.order;

    this.data = [...this.data];
    const value = {
      key,
      order: this.sortByIcon.order
    };
    this.emitEvent(Event.onOrder, value);
  }

  selectedSort(selectIndex) {
    this.sIndex = selectIndex;
  }

  onSearch($event): void {
    this.term = $event;
    // this.emitEvent("onSearch", $event);
  }

  private emitEvent(event: string, value: any): void {
    this.event.emit({ event, value });
    // localStorage.setItem(event, JSON.stringify(value));
  }
}
