import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FrameworkBodyComponent } from './framework-body/framework-body.component';
import { FwContentComponent } from './fw-content/fw-content.component';
import { FwTitleBarComponent } from './fw-title-bar/fw-title-bar.component';
import { FrameworkConfigService } from './services/framework-config.service';
import { TopBarComponent } from './top-bar/top-bar.component';
import { StatusBarComponent } from './status-bar/status-bar.component';
import { ScreenService } from './services/screen-service';
import { IfViewportSizeDirective } from './directives/if-viewport-size.directive';
import { MenuService } from './services/menu-service';
import { MenuComponent } from './menus/menu/menu.component';
import { MenuItemComponent } from './menus/menu-item/menu-item.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CustomIconsComponent } from './custom-icons/custom-icons.component';
import { RouterModule } from '@angular/router';
import { PopupMenuComponent } from './menus/popup-menu/popup-menu.component';


@NgModule({
  imports: [
    CommonModule,
    FontAwesomeModule,
    RouterModule
  ],
  declarations: [
  FrameworkBodyComponent,
  FwContentComponent,
  FwTitleBarComponent,
  TopBarComponent,
  StatusBarComponent, 
  IfViewportSizeDirective,
  MenuComponent,
  MenuItemComponent,
  CustomIconsComponent,
  PopupMenuComponent
],
  providers:[
    FrameworkConfigService,
    ScreenService,
    MenuService
  ],
  exports:[FrameworkBodyComponent]
})
export class OruedarFwModule { }
