import { dialogRight } from "./../../../helpers/utils.helper";
import { GlobalService } from "./../../../services/global.service";
import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-modal-right",
  templateUrl: "./modal-right.component.html",
  styleUrls: ["./modal-right.component.css"],
  animations: [dialogRight]
})
export class ModalRightComponent implements OnInit {
  @Input()
  showModal: any;

  constructor(private _globalService: GlobalService) {}

  onCloseModal() {
    this._globalService.dataBusChanged("closeModal", false);
  }

  ngOnInit() {}
}
