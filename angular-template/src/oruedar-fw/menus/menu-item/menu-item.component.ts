
import { ElementRef } from '@angular/core';
import { Renderer2 } from '@angular/core';
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
  isActiveRoute = false;

  mouseInItem=false;
  mouseInPopup=false;
  popupLeft = 0;
  popupTop= 34;
  
  constructor(public menuService: MenuService,
    public router:Router,
    public el:ElementRef,
    public renderer: Renderer2 ){

  }
  
  onPopupMouseEnter(event:any){
    if(!this.menuService.isVertical){
      this.mouseInPopup = true;
    }
  }

  onPopupMouseLeave(event:any){
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

  @HostListener('click', ['$event'])
  onClick(event) : void {
    event.stopPropagation();
    if(this.item.submenu)
    {
      if(!this.menuService.isVertical){
        this.mouseInPopup = !this.mouseInPopup;
      }
    }else if (this.item.route){
        console.log("me cierro");
        console.log(this.parentIspopup);
        if(this.parentIspopup)
        {
          //force horizontal menus to close by sending a mouse event.
          let newEvent = new MouseEvent('mouseleave', {bubbles:true});
          // this.renderer.invokeElementMethod(this.el.nativeElement, 'dispatchEvent', [newEvent]);
          const element = this.renderer.selectRootElement(this.el.nativeElement);
          element.dispatchEvent(newEvent);
        }
        
        this.router.navigate(['/' + this.item.route]);
    }
    
    
    
  }

}
