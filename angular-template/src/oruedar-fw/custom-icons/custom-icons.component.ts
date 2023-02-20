import { Component, Input } from '@angular/core';
import { Icon, IconDefinition } from '@fortawesome/fontawesome-svg-core';
import * as fasolid from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'fw-custom-icons',
  templateUrl: './custom-icons.component.html',
  styleUrls: ['./custom-icons.component.scss']
})


export class CustomIconsComponent {
@Input() iconName: string = ""
public iconValue:IconDefinition = fasolid.fa0;

ngOnInit(): void {
    
    switch (this.iconName) {
      case "faGauge":
          this.iconValue = fasolid.faGauge;
          break;
      case "faBars":
          this.iconValue = fasolid.faBars;
          break;
          case "faEllipsisVertical":
            this.iconValue = fasolid.faEllipsisVertical;
            break;
      default:
        this.iconValue = fasolid.fa0;
          break;
      }

  }
}
