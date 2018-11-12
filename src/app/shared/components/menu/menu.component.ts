import { leftSideMenu } from "./../../helpers/utils.helper";
import { NavItem } from "./../../pages/login/nav-item";
import { GlobalService } from "../../services/global.service";
import { Component, OnInit, Input } from "@angular/core";
import { MENU_ITEM } from "../../modules/menu";

@Component({
  selector: "app-menu",
  templateUrl: "./menu.component.html",
  styleUrls: ["./menu.component.css"],
  animations: [leftSideMenu]
})
export class MenuComponent implements OnInit {
  sIndex: number;

  navItems: NavItem[] = MENU_ITEM;

  constructor(private _globalService: GlobalService) {}

  ngOnInit() {}

  selectedSort(selectIndex) {
    this.sIndex = selectIndex;
    this._globalService.dataBusChanged("sidebarToggle", true);
  }

  onDirectLink() {
    this._globalService.dataBusChanged("sidebarClose", true);
  }

  onItemSelected(item: NavItem) {
    if (!item.children || !item.children.length) {
    }
    if (item.children && item.children.length) {
    }
  }
}
