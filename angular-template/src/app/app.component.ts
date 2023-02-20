import { Component } from '@angular/core';
import { FrameworkConfigService, FrameworkConfigSettings } from 'src/oruedar-fw/services/framework-config.service';
import { MenuService } from 'src/oruedar-fw/services/menu-service';
import { initialMenuItems } from './app.menu';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'oruedar-angular-template';

  constructor(private frameworkConfigService: FrameworkConfigService,
    menuService: MenuService){

      let config:FrameworkConfigSettings ={
        socialIcons : [
          {imageFile:'assets/images/social-fb-bw.png', alt:'Facebook', link:'www.facebook.com'},
          {imageFile:'assets/images/social-google-bw.png', alt:'Google', link:'www.google.com'},
          // {imageFile:'assets/images/social-twitter-bw.png', alt:'twitter', link:'www.facebook.com'}
        ],
        showLanguageSelector:false,
        showUserControls:true,
        showStatusBar:true,
        showStatusBarBreakpoint:800
      };

      frameworkConfigService.configure(config);
      menuService.items = initialMenuItems
  }
}
