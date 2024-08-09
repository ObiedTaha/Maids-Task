import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IEmpolyee } from '../model/empolyee';
import { RouterLink } from '@angular/router';
import { SearchPipe } from '../../../core/pipes/search.pipe';

@Component({
  selector: 'app-empolyee-card',
  standalone: true,
  imports: [CommonModule, RouterLink, SearchPipe],
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {

  @Input() employee: IEmpolyee = {} as IEmpolyee;
  @Input() searchTerm!: number;

}
