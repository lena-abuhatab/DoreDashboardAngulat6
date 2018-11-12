import { MessageService } from "./../../services/message.service";
import { ErrorService } from "./../../services/error.service";
import { Subscription } from "rxjs";
import { Component, OnInit, OnDestroy } from "@angular/core";

@Component({
  selector: "app-mas-banner",
  templateUrl: "./mas-banner.component.html",
  styleUrls: ["./mas-banner.component.css"]
})
export class MasBannerComponent implements OnInit {
  message;
  // data: { message: string };
  // private errorSub: Subscription;
  constructor(
    private errorService: ErrorService,
    public _messageService: MessageService
  ) {}

  ngOnInit() {
    console.log(this._messageService.messages);

    // this.errorSub = this.errorService.getErrorListener().subscribe(message => {
    //   this.data = { message: message };
    //   this.message = message;
    //   console.log(this.message);
    // });
  }

  // onHandleError() {
  //   this.errorService.handleError();
  // }

  // ngOnDestroy() {
  //   this.errorSub.unsubscribe();
  // }
}
