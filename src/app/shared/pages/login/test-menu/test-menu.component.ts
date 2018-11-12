import { NavItem } from "./../nav-item";
import { Component, OnInit, Input, HostBinding } from "@angular/core";

import { Router } from "@angular/router";
@Component({
  selector: "app-test-menu",
  templateUrl: "./test-menu.component.html",
  styleUrls: ["./test-menu.component.css"]
})
export class TestMenuComponent implements OnInit {
  expanded: boolean;
  // @HostBinding("attr.aria-expanded")
  // ariaExpanded = this.expanded;
  @Input()
  item: NavItem;

  // navItems: NavItem[] = [
  //   {
  //     displayName: "DevFestFL",
  //     iconName: "recent_actors",
  //     children: [
  //       {
  //         displayName: "Speakers",
  //         iconName: "group",
  //         children: [
  //           {
  //             displayName: "Michael Prentice",
  //             iconName: "person",
  //             route: "michael-prentice",
  //             children: [
  //               {
  //                 displayName: "Create Enterprise UIs",
  //                 iconName: "star_rate",
  //                 route: "material-design"
  //               }
  //             ]
  //           },
  //           {
  //             displayName: "Stephen Fluin",
  //             iconName: "person",
  //             route: "stephen-fluin",
  //             children: [
  //               {
  //                 displayName: "What's up with the Web?",
  //                 iconName: "star_rate",
  //                 route: "what-up-web"
  //               }
  //             ]
  //           },
  //           {
  //             displayName: "Mike Brocchi",
  //             iconName: "person",
  //             route: "mike-brocchi",
  //             children: [
  //               {
  //                 displayName: "My ally, the CLI",
  //                 iconName: "star_rate",
  //                 route: "my-ally-cli"
  //               },
  //               {
  //                 displayName: "Become an Angular Tailor",
  //                 iconName: "star_rate",
  //                 route: "become-angular-tailer"
  //               }
  //             ]
  //           }
  //         ]
  //       },
  //       {
  //         displayName: "Sessions",
  //         iconName: "speaker_notes",
  //         children: [
  //           {
  //             displayName: "Create Enterprise UIs",
  //             iconName: "star_rate",
  //             route: "material-design"
  //           },
  //           {
  //             displayName: "What's up with the Web?",
  //             iconName: "star_rate",
  //             route: "what-up-web"
  //           },
  //           {
  //             displayName: "My ally, the CLI",
  //             iconName: "star_rate",
  //             route: "my-ally-cli"
  //           },
  //           {
  //             displayName: "Become an Angular Tailor",
  //             iconName: "star_rate",
  //             route: "become-angular-tailer"
  //           }
  //         ]
  //       },
  //       {
  //         displayName: "Feedback",
  //         iconName: "feedback",
  //         route: "feedback"
  //       }
  //     ]
  //   },
  //   {
  //     displayName: "Disney",
  //     iconName: "videocam",
  //     children: [
  //       {
  //         displayName: "Speakers",
  //         iconName: "group",
  //         children: [
  //           {
  //             displayName: "Michael Prentice",
  //             iconName: "person",
  //             route: "michael-prentice",
  //             children: [
  //               {
  //                 displayName: "Create Enterprise UIs",
  //                 iconName: "star_rate",
  //                 route: "material-design"
  //               }
  //             ]
  //           },
  //           {
  //             displayName: "Stephen Fluin",
  //             iconName: "person",
  //             route: "stephen-fluin",
  //             children: [
  //               {
  //                 displayName: "What's up with the Web?",
  //                 iconName: "star_rate",
  //                 route: "what-up-web"
  //               }
  //             ]
  //           },
  //           {
  //             displayName: "Mike Brocchi",
  //             iconName: "person",
  //             route: "mike-brocchi",
  //             children: [
  //               {
  //                 displayName: "My ally, the CLI",
  //                 iconName: "star_rate",
  //                 route: "my-ally-cli"
  //               },
  //               {
  //                 displayName: "Become an Angular Tailor",
  //                 iconName: "star_rate",
  //                 route: "become-angular-tailer"
  //               }
  //             ]
  //           }
  //         ]
  //       },
  //       {
  //         displayName: "Sessions",
  //         iconName: "speaker_notes",
  //         children: [
  //           {
  //             displayName: "Create Enterprise UIs",
  //             iconName: "star_rate",
  //             route: "material-design"
  //           },
  //           {
  //             displayName: "What's up with the Web?",
  //             iconName: "star_rate",
  //             route: "what-up-web"
  //           },
  //           {
  //             displayName: "My ally, the CLI",
  //             iconName: "star_rate",
  //             route: "my-ally-cli"
  //           },
  //           {
  //             displayName: "Become an Angular Tailor",
  //             iconName: "star_rate",
  //             route: "become-angular-tailer"
  //           }
  //         ]
  //       },
  //       {
  //         displayName: "Feedback",
  //         iconName: "feedback",
  //         route: "feedback"
  //       }
  //     ]
  //   },
  //   {
  //     displayName: "Orlando",
  //     iconName: "movie_filter",
  //     children: [
  //       {
  //         displayName: "Speakers",
  //         iconName: "group",
  //         children: [
  //           {
  //             displayName: "Michael Prentice",
  //             iconName: "person",
  //             route: "michael-prentice",
  //             children: [
  //               {
  //                 displayName: "Create Enterprise UIs",
  //                 iconName: "star_rate",
  //                 route: "material-design"
  //               }
  //             ]
  //           },
  //           {
  //             displayName: "Stephen Fluin",
  //             iconName: "person",
  //             route: "stephen-fluin",
  //             children: [
  //               {
  //                 displayName: "What's up with the Web?",
  //                 iconName: "star_rate",
  //                 route: "what-up-web"
  //               }
  //             ]
  //           },
  //           {
  //             displayName: "Mike Brocchi",
  //             iconName: "person",
  //             route: "mike-brocchi",
  //             children: [
  //               {
  //                 displayName: "My ally, the CLI",
  //                 iconName: "star_rate",
  //                 route: "my-ally-cli"
  //               },
  //               {
  //                 displayName: "Become an Angular Tailor",
  //                 iconName: "star_rate",
  //                 route: "become-angular-tailer"
  //               }
  //             ]
  //           }
  //         ]
  //       },
  //       {
  //         displayName: "Sessions",
  //         iconName: "speaker_notes",
  //         children: [
  //           {
  //             displayName: "Create Enterprise UIs",
  //             iconName: "star_rate",
  //             route: "material-design"
  //           },
  //           {
  //             displayName: "What's up with the Web?",
  //             iconName: "star_rate",
  //             route: "what-up-web"
  //           },
  //           {
  //             displayName: "My ally, the CLI",
  //             iconName: "star_rate",
  //             route: "my-ally-cli"
  //           },
  //           {
  //             displayName: "Become an Angular Tailor",
  //             iconName: "star_rate",
  //             route: "become-angular-tailer"
  //           }
  //         ]
  //       },
  //       {
  //         displayName: "Feedback",
  //         iconName: "feedback",
  //         route: "feedback"
  //       }
  //     ]
  //   },
  //   {
  //     displayName: "Maleficent",
  //     disabled: true,
  //     iconName: "report_problem",
  //     route: "feedback"
  //   }
  // ];

  constructor() {}

  ngOnInit() {}

  onItemSelected(item: NavItem) {
    if (!item.children || !item.children.length) {
    }
    if (item.children && item.children.length) {
      this.expanded = !this.expanded;
    }
  }
}
