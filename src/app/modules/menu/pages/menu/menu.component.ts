import { GlobalService } from "../../../../shared/services/global.service";
import { Component, Input } from "@angular/core";

@Component({
  selector: "app-menu",
  templateUrl: "./menu.component.html"
})
export class MenuComponent {
  @Input()
  menuInfo: any;

  constructor(private _globalService: GlobalService) {}

  private isToggleOn(t) {
    console.log(t);
    t.toggle === "on" ? (t.toggle = "off") : (t.toggle = "on");
  }

  private _selectItem(item) {
    //this._globalService._isActived(item);
    this._globalService.dataBusChanged("isActived", item);
  }
}
