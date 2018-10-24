import { GlobalService } from "../../services/global.service";
import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-menu",
  templateUrl: "./menu.component.html",
  styleUrls: ["./menu.component.css"]
})
export class MenuComponent implements OnInit {
  @Input()
  menuInfo: any;

  sIndex: number;

  constructor(private _globalService: GlobalService) {}

  private isToggleOn(t) {
    console.log(t);
    t.toggle === "on" ? (t.toggle = "off") : (t.toggle = "on");
  }
  ngOnInit() {}

  private _selectItem(item) {
    //this._globalService._isActived(item);
    this._globalService.dataBusChanged("isActived", item);
  }

  selectedSort(selectIndex) {
    // console.log(selectIndex);
    this.sIndex = selectIndex;
    this._globalService.dataBusChanged("sidebarToggle", this.sIndex);
  }

  onDirectLink(selectIndex) {
    this.sIndex = selectIndex;
    this._globalService.dataBusChanged("sidebarClose", true);
  }
}
