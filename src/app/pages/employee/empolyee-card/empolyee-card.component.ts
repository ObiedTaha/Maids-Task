import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IUser } from '../../../core/interfaces/user';
import { RouterLink } from '@angular/router';
import { SearchPipe } from '../../../core/pipes/search.pipe';

@Component({
  selector: 'app-empolyee-card',
  standalone: true,
  imports: [CommonModule,RouterLink,SearchPipe],
  templateUrl: './empolyee-card.component.html',
  styleUrls: ['./empolyee-card.component.scss']
})
export class EmpolyeeCardComponent {

  @Input() employee:IUser={} as IUser;
  @Input() searchTerm!:number;

}
