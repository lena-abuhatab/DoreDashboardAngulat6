import { Order } from "./../../../../../assets/data";
import { Service } from "./../table/data.service";

import { Component, OnInit, Input } from "@angular/core";
import { Subscription } from "rxjs";
import { from } from "rxjs";
import { flatMap, groupBy, reduce } from "rxjs/operators";
@Component({
  selector: "app-group-rows",
  templateUrl: "./group-rows.component.html",
  styleUrls: ["./group-rows.component.css"]
})
export class GroupRowsComponent implements OnInit {
  products: Order[] = [];
  grouped: any = [];

  @Input()
  groupRowsBy: string;
  constructor(private _service: Service) {}

  ngOnInit() {
    // this.products = this._service.getOrders();
    this.doGroupRows();
  }
  private doGroupRows() {
    this.grouped = [];
    from(this.products)
      .pipe(
        groupBy(row => row[this.groupRowsBy]),
        flatMap(group =>
          group.pipe(reduce((acc: object[], curr) => [...acc, curr], []))
        )
      )
      .subscribe(row => {
        this.grouped.push(row);
      });
  }
}
