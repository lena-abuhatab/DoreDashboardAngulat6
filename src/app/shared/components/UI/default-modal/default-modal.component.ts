import { GlobalService } from "./../../../services/global.service";
import { Component, OnInit, Input } from "@angular/core";
import { modalDialog } from "src/app/shared/helpers/utils.helper";

@Component({
  selector: "app-default-modal",
  templateUrl: "./default-modal.component.html",
  styleUrls: ["./default-modal.component.css"],
  animations: [modalDialog]
})
export class DefaultModalComponent implements OnInit {
  @Input()
  showModal: any;

  constructor(private _globalService: GlobalService) {}

  ngOnInit() {}

  onCloseModal() {
    this._globalService.dataBusChanged("closeModal", false);
  }
}
