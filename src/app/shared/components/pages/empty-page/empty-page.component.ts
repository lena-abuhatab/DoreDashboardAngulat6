import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-empty-page",
  templateUrl: "./empty-page.component.html",
  styleUrls: ["./empty-page.component.css"]
})
export class EmptyPageComponent implements OnInit {
  @Input()
  emptyTitle: string;

  @Input()
  emptyIcon: string;

  @Input()
  emptyDescription: string;

  @Input()
  emptyDescription2: string;

  @Input()
  emptyBTN: string;

  constructor() {}

  ngOnInit() {}
}
