import { Component } from '@angular/core';
import { MenuService } from '../services/menu-service';

@Component({
  selector: 'fw-content',
  templateUrl: './fw-content.component.html',
  styleUrls: ['./fw-content.component.scss']
})
export class FwContentComponent {

  constructor(public menuService:MenuService) {
    
  }

}
