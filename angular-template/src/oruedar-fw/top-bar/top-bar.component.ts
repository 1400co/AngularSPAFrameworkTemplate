import { Component } from '@angular/core';
import { FrameworkConfigService } from '../services/framework-config.service';

@Component({
  selector: 'fw-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent {

  constructor(public frameworkConfigService: FrameworkConfigService)
  {
  }

  ngOnInit(){

  }

}
