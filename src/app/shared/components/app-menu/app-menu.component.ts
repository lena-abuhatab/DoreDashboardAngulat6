import { Component, OnInit, Input } from "@angular/core";
import { columns, orders, Order } from "../../../../assets/data";
import { Columns } from "../../modules/columns";
@Component({
  selector: "app-app-menu",
  templateUrl: "./app-menu.component.html",
  styleUrls: ["./app-menu.component.css"]
})
export class AppMenuComponent implements OnInit {
  tabs = [
    { key: "Columns", title: "Columns" },
    { key: "Filters", title: "Filters" },
    { key: "Mode", title: "Mode" }
  ];
  checked = new Set([
    "OrderNumber",
    "OrderDate",
    "SaleAmount",
    "Employee",
    "CustomerInfo.StoreCity",
    "CustomerInfo.StoreState"
  ]);
  @Input()
  columns;
  @Input()
  columnsCopy;
  city;
  @Input()
  data: Order[] = [];
  constructor() {
    // this.data = orders;
    // this.columns = columns;
    // this.columnsCopy = columns;
  }
  states = [{ title: "Employee" }, { title: "Terms" }];
  ngOnInit() {
    // console.log(this.columns.filter(s => s.CustomerInfo[0].StoreCity));s
  }
  toggle(name: string, value: boolean): void {
    value ? this.checked.add(name) : this.checked.delete(name);
    this.columns = this.columnsCopy.filter(column =>
      this.checked.has(column.key)
    );
  }

  showCount(group, key: string) {
    return group.map(row => row[key]).reduce((acc, cur) => cur + acc, 0);
  }
}
