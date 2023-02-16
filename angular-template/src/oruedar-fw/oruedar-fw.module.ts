import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FrameworkBodyComponent } from './framework-body/framework-body.component';
import { FwContentComponent } from './fw-content/fw-content.component';
import { FwTitleBarComponent } from './fw-title-bar/fw-title-bar.component';
import { FrameworkConfigService } from './services/framework-config.service';
import { TopBarComponent } from './top-bar/top-bar.component';
import { StatusBarComponent } from './status-bar/status-bar.component';
import { ScreenService } from './services/screen-service';



@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
  FrameworkBodyComponent,
  FwContentComponent,
  FwTitleBarComponent,
  TopBarComponent,
  StatusBarComponent
],
  providers:[
    FrameworkConfigService,
    ScreenService
  ],
  exports:[FrameworkBodyComponent]
})
export class OruedarFwModule { }
