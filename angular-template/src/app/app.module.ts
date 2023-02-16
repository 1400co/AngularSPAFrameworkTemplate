import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { OruedarFwModule } from 'src/oruedar-fw/oruedar-fw.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    OruedarFwModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
