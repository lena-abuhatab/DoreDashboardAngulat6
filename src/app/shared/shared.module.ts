import { TabHeadingDirective } from "./directives/tab-heading.directive";
import { TabTranscludeDirective } from "./directives/tab-transclude.directive";
import { DropdownDirective } from "./directives/dropdown.directive";
import { NgModule } from "@angular/core";
import { MaterialModule } from "./modules/material.module";
import { TranslateModule } from "@ngx-translate/core";
import { FlexLayoutModule } from "@angular/flex-layout";
import { CommonModule } from "@angular/common";
import { SpinnerComponent } from "./components/spinner/spinner.component";
import { FooterComponent } from "./components/footer/footer.component";
import { SearchBarComponent } from "./components/search-bar/search-bar.component";
import { HeaderComponent } from "./components/header/header.component";
import { ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { HomePageComponent } from "./pages/home-page/home-page.component";
import { Error404PageComponent } from "./pages/error404-page/error404-page.component";
import { HeroCardComponent } from "./components/hero-card/hero-card.component";
import { ScrollToFirstInvalidDirective } from "./directives/scroll-to-first-invalid.directive";
import { NgxExampleLibraryModule } from "@ismaestro/ngx-example-library";
import { WebStorageModule } from "ngx-store";
import { HeroLoadingComponent } from "./components/hero-loading/hero-loading.component";
import { SidebarComponent } from "./components/sidebar/sidebar.component";
import { DropdownComponent } from "./components/UI/dropdown/dropdown.component";
import { LoginComponent } from "./pages/login/login.component";
import { ColorThemeComponent } from "./components/color-theme/color-theme.component";
import { MenuComponent } from "./components/menu/menu.component";
import { SubMenuComponent } from "./components/menu/sub-menu/sub-menu.component";
import { HeaderContainerComponent } from "./components/header-container/header-container.component";
import { AppMenuComponent } from "./components/app-menu/app-menu.component";
import { TabsetComponent } from "./components/UI/tabset/tabset.component";
import { TabContentComponent } from "./components/UI/tabset/tab-content/tab-content.component";
import { CollapseComponent } from "./components/UI/collapse/collapse.component";

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    TranslateModule.forChild(),
    ReactiveFormsModule,
    RouterModule,
    NgxExampleLibraryModule,
    WebStorageModule
  ],
  declarations: [
    HomePageComponent,
    Error404PageComponent,
    HeaderComponent,
    SearchBarComponent,
    FooterComponent,
    SpinnerComponent,
    HeroCardComponent,
    HeroLoadingComponent,
    ScrollToFirstInvalidDirective,
    DropdownDirective,
    TabTranscludeDirective,
    TabHeadingDirective,
    SidebarComponent,
    DropdownComponent,
    LoginComponent,
    ColorThemeComponent,
    MenuComponent,
    SubMenuComponent,
    HeaderContainerComponent,
    AppMenuComponent,
    TabsetComponent,
    TabContentComponent,
    CollapseComponent
  ],
  exports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    TranslateModule,
    NgxExampleLibraryModule,
    WebStorageModule,
    HeaderComponent,
    SidebarComponent,
    SearchBarComponent,
    FooterComponent,
    SpinnerComponent,
    HeroCardComponent,
    HeroLoadingComponent,
    ScrollToFirstInvalidDirective,
    DropdownDirective,
    TabTranscludeDirective,
    TabHeadingDirective,
    DropdownComponent,
    ColorThemeComponent,
    MenuComponent,
    SubMenuComponent,
    HeaderContainerComponent,
    AppMenuComponent
  ]
})
export class SharedModule {}
