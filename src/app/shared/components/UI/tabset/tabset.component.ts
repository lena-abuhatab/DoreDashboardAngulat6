import { TabContentComponent } from "./tab-content/tab-content.component";

import {
  Component,
  ContentChildren,
  OnInit,
  Input,
  Output,
  AfterContentInit,
  EventEmitter,
  QueryList
} from "@angular/core";

@Component({
  selector: "app-tabset",
  templateUrl: "./tabset.component.html",
  styleUrls: ["./tabset.component.css"]
})
export class TabsetComponent implements OnInit, AfterContentInit {
  @Input()
  public disableStyle: boolean;

  @Input()
  public animate: boolean = true;

  @Input()
  public customNavClass: string = "";

  @Output()
  public onSelect = new EventEmitter(false);

  @ContentChildren(TabContentComponent)
  public tabs: QueryList<TabContentComponent>;
  constructor() {}

  ngOnInit() {}

  public changeActiveTab(tab: TabContentComponent) {
    if (!tab.disabled && !tab.active) {
      const me = this;
      const tabs = this.tabs.toArray();
      tabs.forEach(t => (t.active = false));
      if (this.animate) {
        setTimeout(() => {
          tab.active = true;
          me.onSelect.emit(tabs.indexOf(tab));
        }, 201);
      } else {
        tab.active = true;
        me.onSelect.emit(tabs.indexOf(tab));
      }
    }
  }

  public ngAfterContentInit() {
    setTimeout(() => {
      const readTabs = this.tabs.toArray();

      const activeTab = readTabs.find(tab => tab.active === true);

      if (!activeTab && readTabs.length > 0) {
        readTabs[0].active = true;
      }
    });
  }
}
