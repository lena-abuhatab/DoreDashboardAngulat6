import { GlobalService } from "./../../services/global.service";
import { Component, OnInit, Input } from "@angular/core";

import { collapse } from "../../helpers/utils.helper";

@Component({
  selector: "app-header-container",
  templateUrl: "./header-container.component.html",
  styleUrls: ["./header-container.component.css"],
  animations: [collapse]
})
export class HeaderContainerComponent implements OnInit {
  @Input()
  containerTitle: string;

  @Input()
  ShowAddNewBTN: boolean = false;

  @Input()
  ShowDisplayOptions: boolean;

  @Input()
  ShowContainerNav: boolean;

  @Input()
  ShowOrderView: boolean;
  @Input()
  ShowOrderSearch: boolean;
  @Input()
  showDisplayingItem: boolean;

  @Input()
  breadcrumb1: string;

  @Input()
  ShowOptionsBTN: boolean;

  @Input()
  breadcrumb2: string;

  collapse: string = "on";
  isCollapse: boolean = true;

  modal = false;

  removeOption = false;

  constructor(private _globalService: GlobalService) {}

  ngOnInit() {}

  private collapseCard() {
    this.collapse === "on" ? (this.collapse = "off") : (this.collapse = "on");
    this.isCollapse = !this.isCollapse;
  }

  onOpenModal() {
    this.modal = true;
    this._globalService.dataBusChanged("isModal", this.modal);
  }

  onRemoveOptions() {
    this.removeOption = !this.removeOption;
  }

  onRemoveIndex() {
    this._globalService.dataBusChanged("removeIndex", false);
  }

  onChangeCategory(event) {
    if (event.target.checked) {
      this._globalService.dataBusChanged("addAllCheck", true);
    } else {
      this._globalService.dataBusChanged("removeAllCheck", true);
    }
  }
}
