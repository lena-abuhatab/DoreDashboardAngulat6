import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-right-filter",
  templateUrl: "./right-filter.component.html",
  styleUrls: ["./right-filter.component.css"]
})
export class RightFilterComponent implements OnInit {
  @Input()
  emptyData: any;

  constructor() {}

  ngOnInit() {}
}
