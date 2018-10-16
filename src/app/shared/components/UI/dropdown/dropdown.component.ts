import {
  Component,
  OnInit,
  HostListener,
  ViewChild,
  ElementRef,
  Input
} from "@angular/core";

@Component({
  selector: "app-dropdown",
  templateUrl: "./dropdown.component.html",
  styleUrls: ["./dropdown.component.css"]
})
export class DropdownComponent implements OnInit {
  dropDownUser = false;

  @Input()
  btnIcon: string;

  @Input()
  dropDownID: any;

  @Input()
  userName: string;

  @Input()
  userImage: any;

  @Input()
  show: boolean;

  @ViewChild("anchor")
  public anchor: ElementRef;

  @ViewChild("popup", { read: ElementRef })
  public popup: ElementRef;

  constructor() {}

  ngOnInit() {}

  OnDropDownMenu(dropDownUser?: boolean): void {
    this.dropDownUser =
      dropDownUser !== undefined ? dropDownUser : !this.dropDownUser;
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
      this.OnDropDownMenu(false);
    }
  }
}
