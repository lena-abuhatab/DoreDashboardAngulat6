import { fadeSlow } from "../../../../helpers/utils.helper";
import {
  Component,
  Input,
  ContentChild,
  TemplateRef,
  OnInit
} from "@angular/core";
import {
  trigger,
  style,
  animate,
  transition,
  state
} from "@angular/animations";
import { TabHeadingDirective } from "../../../../directives/tab-heading.directive";

@Component({
  animations: [fadeSlow],
  selector: "app-tab-content",
  templateUrl: "./tab-content.component.html",
  styleUrls: ["./tab-content.component.css"]
})
export class TabContentComponent implements OnInit {
  // @Input()
  // AIndex: number;

  // @ContentChild(TabHeadingDirective)
  // public heading: TabHeadingDirective;

  @Input()
  public title: string;

  @Input()
  public icon: string;

  @Input()
  public active: boolean = false;

  @Input()
  public disabled = false;

  constructor() {}

  ngOnInit() {}

  // get headingTemplate(): TemplateRef<any> | null {
  //   return this.heading ? this.heading.templateRef : null;
  // }
}
