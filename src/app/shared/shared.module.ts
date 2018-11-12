import { GlobalSearchPipe } from "./pipes/global-search-pipe";
import { TableHeaderComponent } from "./components/pages/table/header/header.component";
import { RenderPipe } from "./pipes/render-pipe";
import { SearchPipe } from "./pipes/search-pipe";
import { SortPipe } from "./pipes/sort.pipe";
import { TabHeadingDirective } from "./directives/tab-heading.directive";
import { TabTranscludeDirective } from "./directives/tab-transclude.directive";
import { DropdownDirective } from "./directives/dropdown.directive";
import { NgModule } from "@angular/core";
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
import { ScrollToFirstInvalidDirective } from "./directives/scroll-to-first-invalid.directive";
import { NgxExampleLibraryModule } from "@ismaestro/ngx-example-library";
import { WebStorageModule } from "ngx-store";
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
import { TableComponent } from "./components/pages/table/table.component";
import { GroupRowsComponent } from "./components/pages/group-rows/group-rows.component";

import { OwlDateTimeModule, OwlNativeDateTimeModule } from "ng-pick-datetime";
import { ModalRightComponent } from "./components/UI/modal-right/modal-right.component";
import { TestMenuComponent } from "./pages/login/test-menu/test-menu.component";
import { ListThumbnailLoadingComponent } from "./components/page-loading/list-thumbnail-loading/list-thumbnail-loading.component";
import { EmptyPageComponent } from "./components/pages/empty-page/empty-page.component";
import { DefaultModalComponent } from "./components/UI/default-modal/default-modal.component";
import { RightFilterComponent } from "./components/right-filter/right-filter.component";
import { RFilterItemComponent } from "./components/right-filter/r-filter-item/r-filter-item.component";
import { GlobalSearchComponent } from "./components/global-search/global-search.component";
import { MasBannerComponent } from "./components/mas-banner/mas-banner.component";
@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    TranslateModule.forChild(),
    ReactiveFormsModule,
    RouterModule,
    NgxExampleLibraryModule,
    WebStorageModule,
    OwlDateTimeModule,
    OwlNativeDateTimeModule
  ],
  declarations: [
    HomePageComponent,
    Error404PageComponent,
    HeaderComponent,
    SearchBarComponent,
    FooterComponent,
    SpinnerComponent,
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
    CollapseComponent,
    TableComponent,
    GroupRowsComponent,
    RenderPipe,
    SearchPipe,
    SortPipe,
    TableHeaderComponent,
    ModalRightComponent,
    TestMenuComponent,
    ListThumbnailLoadingComponent,
    EmptyPageComponent,
    DefaultModalComponent,
    RightFilterComponent,
    RFilterItemComponent,
    GlobalSearchComponent,
    GlobalSearchPipe,
    MasBannerComponent
  ],
  exports: [
    CommonModule,
    FlexLayoutModule,
    TranslateModule,
    NgxExampleLibraryModule,
    WebStorageModule,
    HeaderComponent,
    SidebarComponent,
    SearchBarComponent,
    FooterComponent,
    SpinnerComponent,
    ScrollToFirstInvalidDirective,
    DropdownDirective,
    TabTranscludeDirective,
    TabHeadingDirective,
    DropdownComponent,
    ColorThemeComponent,
    MenuComponent,
    SubMenuComponent,
    HeaderContainerComponent,
    AppMenuComponent,
    TableComponent,
    GroupRowsComponent,
    RenderPipe,
    SearchPipe,
    SortPipe,
    TableHeaderComponent,
    ModalRightComponent,
    TabsetComponent,
    TabContentComponent,
    ListThumbnailLoadingComponent,
    EmptyPageComponent,
    DefaultModalComponent,
    RightFilterComponent,
    RFilterItemComponent,
    GlobalSearchComponent,
    GlobalSearchPipe,
    MasBannerComponent
  ]
})
export class SharedModule {}
