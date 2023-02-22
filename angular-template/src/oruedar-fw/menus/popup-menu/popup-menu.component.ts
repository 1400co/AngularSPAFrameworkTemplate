import { Component, Input } from '@angular/core';
import { MenuItem, MenuService } from 'src/oruedar-fw/services/menu-service';

@Component({
  selector: 'fw-popup-menu',
  templateUrl: './popup-menu.component.html',
  styleUrls: ['./popup-menu.component.scss']
})
export class PopupMenuComponent {

  @Input() menu :Array<MenuItem>|undefined|null = [] ;

  constructor(public menuService:MenuService){

  }
}
