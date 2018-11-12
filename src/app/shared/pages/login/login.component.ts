import { NavItem } from "./nav-item";
import { NavService } from "./nav.service";
import {
  Component,
  ViewChild,
  ElementRef,
  ViewEncapsulation,
  AfterViewInit
} from "@angular/core";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements AfterViewInit {
  constructor(private navService: NavService) {}

  ngAfterViewInit() {
    // this.navService.appDrawer = this.appDrawer;
  }
}
