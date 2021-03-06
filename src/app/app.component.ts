import { GlobalService } from "./shared/services/global.service";
import { Component, OnInit } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";
import { Meta, Title } from "@angular/platform-browser";
import { NavigationEnd, Router } from "@angular/router";
import { _ } from "@biesbjerg/ngx-translate-extract/dist/utils/utils";
import { AppConfig } from "./configs/app.config";
import { LocalStorage } from "ngx-store";
import { isBrowserValid } from "./shared/helpers/utils.helper";

declare const require;
declare const Modernizr;

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html"
})
export class AppComponent implements OnInit {
  sidebarToggle = false;
  mainSubHide = false;
  subHide = false;

  @LocalStorage()
  language = "en";
  isOnline: boolean;

  constructor(
    private translateService: TranslateService,
    private _globalService: GlobalService,
    private title: Title,
    private meta: Meta,
    private router: Router
  ) {
    this.isOnline = navigator.onLine;
  }

  ngOnInit() {
    this._sidebarToggle();

    this.translateService.setDefaultLang("en");
    this.translateService.use(this.language);

    // With this we load the default language in the main bundle (cache busting)
    this.translateService.setTranslation(
      "en",
      require("../assets/i18n/en.json")
    );

    this.title.setTitle("Angular Example App");

    this.onEvents();
    this.checkBrowser();
  }

  public _sidebarToggle() {
    this._globalService.data$.subscribe(
      data => {
        if (data.ev === "sidebarToggle") {
          this.sidebarToggle = true;
        } else if (data.ev === "sidebarColorToggle") {
          this.sidebarToggle = false;
        } else if (data.ev === "sidebarClose") {
          this.sidebarToggle = false;
        } else if (data.ev === "sidebarLinkClose") {
          this.sidebarToggle = false;
        } else if (data.ev === "main-sub-hide" && data.value === true) {
          this.mainSubHide = true;
          this.sidebarToggle = false;
        } else {
          this.mainSubHide = false;
          this.sidebarToggle = true;
        }
      },
      error => {
        console.log("Error: " + error);
      }
    );
  }

  closeLeftSide() {
    this._globalService.dataBusChanged("sidebarToggle", true);
    this._globalService.dataBusChanged("sidebarColorToggle", false);
  }

  onEvents() {
    this.router.events.subscribe((event: any) => {
      if (event instanceof NavigationEnd) {
        switch (event.urlAfterRedirects) {
          case "/":
            this.meta.updateTag({
              name: "description",
              content:
                "Angular Example app with Angular CLI, Angular Material and more"
            });
            break;
          case "/" + AppConfig.routes.heroes:
            this.title.setTitle("Heroes list");
            this.meta.updateTag({
              name: "description",
              content: "List of super-heroes"
            });
            break;
        }
      }
    });
  }

  checkBrowser() {
    if (isBrowserValid()) {
      this.checkBrowserFeatures();
    } else {
      this.translateService
        .get([String(_("changeBrowser"))])
        .subscribe(texts => {
          // this.snackBar.open(texts["changeBrowser"], "OK");
        });
    }
  }

  checkBrowserFeatures() {
    let supported = true;
    for (const feature in Modernizr) {
      if (
        Modernizr.hasOwnProperty(feature) &&
        typeof Modernizr[feature] === "boolean" &&
        Modernizr[feature] === false
      ) {
        supported = false;
        break;
      }
    }

    if (!supported) {
      this.translateService
        .get([String(_("updateBrowser"))])
        .subscribe(texts => {
          // this.snackBar.open(texts["updateBrowser"], "OK");
        });
    }

    return supported;
  }
}
