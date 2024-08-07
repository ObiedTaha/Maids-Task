import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Iuser } from '../../interfaces/iuser';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-empolyee-card',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './empolyee-card.component.html',
  styleUrls: ['./empolyee-card.component.scss']
})
export class EmpolyeeCardComponent {

  @Input() employee:Iuser={} as Iuser

}
