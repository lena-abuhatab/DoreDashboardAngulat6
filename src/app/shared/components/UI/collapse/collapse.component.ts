import { Component, OnInit, Input } from "@angular/core";

import { collapse } from "../../../../shared/helpers/utils.helper";
@Component({
  selector: "app-collapse",
  templateUrl: "./collapse.component.html",
  styleUrls: ["./collapse.component.css"],
  animations: [collapse]
})
export class CollapseComponent implements OnInit {
  @Input()
  toggleTitle: string;

  @Input()
  show: string;

  collapse: string = "off";
  isCollapse: boolean = true;

  constructor() {}

  ngOnInit() {}

  private collapseCard() {
    this.collapse === "on" ? (this.collapse = "off") : (this.collapse = "on");
    this.isCollapse = !this.isCollapse;
  }
}
