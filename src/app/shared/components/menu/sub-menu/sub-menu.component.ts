import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-sub-menu",
  templateUrl: "./sub-menu.component.html",
  styleUrls: ["./sub-menu.component.css"]
})
export class SubMenuComponent implements OnInit {
  @Input()
  subMenuInfo: any;

  @Input()
  sIndex: any;

  @Input()
  index: any;
  constructor() {}

  ngOnInit() {}
}
