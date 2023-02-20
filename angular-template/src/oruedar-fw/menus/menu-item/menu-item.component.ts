import { Component, Input } from '@angular/core';
import { MenuItem, MenuService } from 'src/oruedar-fw/services/menu-service';

@Component({
  selector: 'fw-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.scss']
})
export class MenuItemComponent {
  
  @Input() item :MenuItem = {
    text: "",
    icon: "",
    route: "",
    submenu: []
  };
  
  constructor(public menuService: MenuService){

  }
}
