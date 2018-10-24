import { columns, orders, Order } from "./../../../../assets/data";
import { Columns } from "./../../modules/columns";
import { Component, OnInit } from "@angular/core";
import { fadeInOut } from "../../helpers/utils.helper";

@Component({
  selector: "app-home-page",
  templateUrl: "./home-page.component.html",
  styleUrls: ["./home-page.component.scss"],
  animations: [fadeInOut]
})
export class HomePageComponent implements OnInit {
  columns: Columns[] = [];
  columnsCopy: Columns[] = [];
  data: Order[] = [];

  constructor() {
    this.data = orders;
    this.columns = columns;
    this.columnsCopy = columns;
  }

  ngOnInit() {}
}
