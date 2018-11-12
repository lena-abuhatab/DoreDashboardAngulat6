import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { LoggerService } from "../../../core/services/logger.service";

@Component({
  selector: "app-search-bar",
  templateUrl: "./search-bar.component.html",
  styleUrls: ["./search-bar.component.scss"],
  providers: [LoggerService]
})
export class SearchBarComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}
}
