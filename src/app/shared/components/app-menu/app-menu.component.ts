import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-app-menu',
  templateUrl: './app-menu.component.html',
  styleUrls: ['./app-menu.component.css']
})
export class AppMenuComponent implements OnInit {
  tabs = [
    { key: "Columns", title: "Columns" },
    { key: "Filters", title: "Filters" },
    { key: "Mode", title: "Mode" }
  ];
  constructor() { }

  ngOnInit() {
  }

}
