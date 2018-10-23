import { MenuService } from "./../../../modules/menu/shared/menu.service";
import { GlobalService } from "./../../services/global.service";
import { Component, Input, Output, EventEmitter, OnInit } from "@angular/core";

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.css"]
})
export class SidebarComponent implements OnInit {
  sIndex: number;

  children: Array<any> = [];

  public menuInfo: Array<any> = [];
  public sidebarToggle = true;

  constructor(
    private _menuService: MenuService,
    public _globalService: GlobalService
  ) {}

  ngOnInit() {
    this.menuInfo = this._menuService.putSidebarJson();
    // console.log(this.menuInfo);
    this._sidebarToggle();
    this._menuService.selectItem(
      this.menuInfo
    ); /* ----->初始化判断路由isActive状态  未完成  待优化 */
    this._isSelectItem(this.menuInfo);
  }

  public _sidebarToggle() {
    // this._globalService._sidebarToggleState(true);
    /* this._globalService.sidebarToggle$.subscribe(sidebarToggle => {
      this.sidebarToggle = sidebarToggle;
    }, error => {
      console.log('Error: ' + error);
    }); */
    this._globalService.data$.subscribe(
      data => {
        if (data.ev === "sidebarToggle") {
          this.sidebarToggle = data.value;
        }
      },
      error => {
        console.log("Error: " + error);
      }
    );
  }

  /* 初始化 判断当前路由状态信息 首次加载菜单状态 */
  _isSelectItem(item) {
    for (const i in item) {
      if (item[i].children) {
        for (const index in item[i].children) {
          if (
            item[i].children[index].isActive ||
            item[i].children[index].toggle === "on"
          ) {
            item[i].toggle = "on";
            break;
          } else {
            this._isSelectItem(item[i].children);
          }
        }
      }
    }
  }
  private _selectItem(item) {
    this._globalService.dataBusChanged("isActived", item);
  }
  private isToggleOn(t) {
    console.log(t);
    t.toggle === "on" ? (t.toggle = "off") : (t.toggle = "on");
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
