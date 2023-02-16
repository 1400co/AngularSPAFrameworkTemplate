import { Component } from '@angular/core';
import { ScreenService } from '../services/screen-service';

@Component({
  selector: 'fw-title-bar',
  templateUrl: './fw-title-bar.component.html',
  styleUrls: ['./fw-title-bar.component.scss']
})

export class FwTitleBarComponent {
  
  constructor(public screenService: ScreenService){

  }

  ngOnInit(){

  }
}
