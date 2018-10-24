import { GlobalService } from "../../services/global.service";
import {
  Component,
  OnInit,
  HostListener,
  ViewChild,
  ElementRef
} from "@angular/core";

@Component({
  selector: "app-color-theme",
  templateUrl: "./color-theme.component.html",
  styleUrls: ["./color-theme.component.css"]
})
export class ColorThemeComponent implements OnInit {
  colorThemeToggle = false;

  @ViewChild("anchor")
  public anchor: ElementRef;

  @ViewChild("popup", { read: ElementRef })
  public popup: ElementRef;
  constructor(public _globalService: GlobalService) {}

  ngOnInit() {}

  // () {
  //   this.colorThemeToggle = !this.colorThemeToggle;
  // }
  onColorTheme(colorThemeToggle?: boolean): void {
    this.colorThemeToggle =
      colorThemeToggle !== undefined
        ? colorThemeToggle
        : !this.colorThemeToggle;

    this._globalService.dataBusChanged("sidebarColorToggle", colorThemeToggle);
  }
  private contains(target: any): boolean {
    return (
      this.anchor.nativeElement.contains(target) ||
      (this.popup ? this.popup.nativeElement.contains(target) : false)
    );
  }
  @HostListener("document:click", ["$event"])
  public documentClick(event: any): void {
    if (!this.contains(event.target)) {
      // this.onColorTheme(false);
    }
  }
}
