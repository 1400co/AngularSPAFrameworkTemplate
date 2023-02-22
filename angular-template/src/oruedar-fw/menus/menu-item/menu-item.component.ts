
import { Component, HostBinding, Input, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem, MenuService } from 'src/oruedar-fw/services/menu-service';

@Component({
  selector: 'fw-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.scss']
})
export class MenuItemComponent {
  menuItems: Array<MenuItem> = [];

  @Input() item :MenuItem  = {
    text: "",
    icon: "",
    route: "",
    submenu: []
  };
  
  @HostBinding('class.parent-is-popup')
  @Input() parentIspopup = true;
  isActiveroute = false;

  mouseInItem=false;
  mouseInPopup=false;
  popupLeft = 0;
  popupTop= 34;
  
  constructor(public menuService: MenuService,
    public router:Router){

  }
  
  onPopupMouseEnter(event:any){
    console.log("mouse enter")
    if(!this.menuService.isVertical){
      this.mouseInPopup = true;
    }
  }

  onPopupMouseLeave(event:any){
    console.log("mouse leave")
    if(!this.menuService.isVertical){
      this.mouseInPopup = false;
    }
  }
  
  @HostListener('mouseleave', ['$event'])
  onMouseLeave(event) {
    
    this.mouseInPopup = false;

    if(!this.menuService.isVertical)
    {
      this.mouseInItem = false;
    }
  }

  @HostListener('mouseenter')
  onMouseEnter(): void {
    this.mouseInPopup = true;

    if(!this.menuService.isVertical)
    {
      if(this.item.submenu ){
        this.mouseInItem= true;
        if(this.parentIspopup){
          this.popupLeft=160;
          this.popupTop=0;
        }
      }
    }
  }



}
