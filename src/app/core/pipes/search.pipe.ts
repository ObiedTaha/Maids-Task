import { Pipe, PipeTransform } from '@angular/core';
import { IUser } from '../interfaces/user';

@Pipe({
  name: 'search',
  standalone: true
})
export class SearchPipe implements PipeTransform {

  transform(customer: IUser[], searchKey: string): IUser[] {
    if (!customer) return [];
  

    return customer.filter(user => user.id == searchKey);
  }

}
