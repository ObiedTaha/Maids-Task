import { Pipe, PipeTransform } from '@angular/core';
import { IUser } from '../interfaces/iuser';

@Pipe({
  name: 'search',
  standalone: true
})
export class SearchPipe implements PipeTransform {

  transform(customer: IUser[], searchKey: number): IUser[] {
    if (!customer || !searchKey) {
      return customer;
    }

    return customer.filter(user => user.id === searchKey);
  }

}
