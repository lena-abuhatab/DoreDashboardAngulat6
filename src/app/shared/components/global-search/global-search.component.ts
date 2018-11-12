import { Component, OnInit, EventEmitter, Output } from "@angular/core";

@Component({
  selector: "app-global-search",
  templateUrl: "./global-search.component.html",
  styleUrls: ["./global-search.component.css"]
})
export class GlobalSearchComponent implements OnInit {
  @Output()
  globalUpdate = new EventEmitter();
  constructor() {}

  ngOnInit() {}
}
