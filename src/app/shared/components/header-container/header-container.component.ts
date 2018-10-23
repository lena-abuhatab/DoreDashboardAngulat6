import { Component, OnInit, Input } from "@angular/core";

import { collapse } from "../../../shared/helpers/utils.helper";

@Component({
  selector: "app-header-container",
  templateUrl: "./header-container.component.html",
  styleUrls: ["./header-container.component.css"],
  animations: [collapse]
})
export class HeaderContainerComponent implements OnInit {
  @Input()
  containerTitle: string;

  @Input()
  ShowAddNewBTN: boolean = false;

  @Input()
  ShowDisplayOptions: boolean;

  @Input()
  ShowContainerNav: boolean;

  @Input()
  ShowOrderView: boolean;
  @Input()
  ShowOrderSearch: boolean;
  @Input()
  showDisplayingItem: boolean;

  @Input()
  breadcrumb1: string;

  @Input()
  breadcrumb2: string;

  collapse: string = "on";
  isCollapse: boolean = true;

  constructor() {}

  ngOnInit() {}

  private collapseCard() {
    this.collapse === "on" ? (this.collapse = "off") : (this.collapse = "on");
    this.isCollapse = !this.isCollapse;
  }
}
