import { GlobalService } from "./../../services/global.service";
import { ActivatedRoute, ParamMap, Router } from "@angular/router";
import { Component, Inject, OnInit } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";
import { _ } from "@biesbjerg/ngx-translate-extract/dist/utils/utils";
import { APP_CONFIG, AppConfig } from "../../../configs/app.config";
import { ProgressBarService } from "../../../core/services/progress-bar.service";
import { LocalStorage } from "ngx-store";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"]
})
export class HeaderComponent implements OnInit {
  @LocalStorage()
  language = "en";

  appConfig: any;
  menuItems: any[];
  progressBarMode: string;
  currentLang: string;
  toggleMenu = false;

  currentRoute;
  constructor(
    @Inject(APP_CONFIG) appConfig: any,
    private progressBarService: ProgressBarService,
    private translateService: TranslateService,
    private route: ActivatedRoute,
    private router: Router,
    private _globalService: GlobalService
  ) {
    this.appConfig = appConfig;
    this.currentRoute = this.route;
  }

  ngOnInit() {
    this.currentLang = this.translateService.currentLang;
    this.loadMenus();
    this.progressBarService.updateProgressBar$.subscribe((mode: string) => {
      this.progressBarMode = mode;
    });
    this.route.queryParamMap.subscribe((paramMap: ParamMap) => {
      const lang = paramMap.get("persist_locale");
      this.changeLanguage(lang);
    });
    // this._globalService.data$.subscribe(data => {
    //   if (data.ev === "sub-hide") {
    //     this._globalService.dataBusChanged("test", true);
    //   }
    // });
  }

  private changeLanguage(language: string): void {
    this.translateService.use(language).subscribe(() => {
      // this.loadMenus();
      this.language = language;
    });
  }

  changeLang(lang) {
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { persist_locale: lang },
      queryParamsHandling: "merge"
    });
  }

  private loadMenus(): void {
    this.menuItems = [
      { link: "/", name: _("home") },
      { link: "/" + AppConfig.routes.heroes, name: _("heroesList") }
    ];
  }

  onMenuChange() {
    this.toggleMenu = !this.toggleMenu;
    this._globalService.dataBusChanged("main-sub-hide", this.toggleMenu);
    // this._globalService.dataBusChanged("sub-hide", false);
  }
}
