import { Component } from '@angular/core';
import { MenuService } from 'src/oruedar-fw/services/menu-service';

@Component({
  selector: 'fw-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  constructor(public menuService: MenuService){

  } 
}
