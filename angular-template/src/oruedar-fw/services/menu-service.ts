import { Injectable } from '@angular/core'

export interface MenuItem {
    text: string;
    icon: string;
    route?: string | null,
    submenu?: Array<MenuItem> | null
}

@Injectable()
export class MenuService{

    constructor(){

    }
    
   items: Array<MenuItem> = [];
   isVertical:boolean = false; 
   showingLeftsideMenu: boolean = false;

   toggleLeftsideMenu(): void {
    this.isVertical =true
    this.showingLeftsideMenu = !this.showingLeftsideMenu;
    console.log("click",this.isVertical,this.showingLeftsideMenu  )
   }

   toggleMenuOrientation(){
    this.isVertical =!this.isVertical
   }
}