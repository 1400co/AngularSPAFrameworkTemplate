import { Component } from '@angular/core';
import { MenuService } from '../services/menu-service';

@Component({
  selector: 'fw-title-bar',
  templateUrl: './fw-title-bar.component.html',
  styleUrls: ['./fw-title-bar.component.scss']
})

export class FwTitleBarComponent {
  
  constructor(public menuService: MenuService){

  }

  ngOnInit(){

  }
}
