import { Pipe, PipeTransform } from '@angular/core';
import { IEmpolyee } from '../../pages/employee/model/empolyee';

@Pipe({
  name: 'search',
  standalone: true
})
export class SearchPipe implements PipeTransform {

  transform(customer: IEmpolyee[], searchKey: string): IEmpolyee[] {
    if (!customer) return [];
  

    return customer.filter(user => user.id == searchKey);
  }

}
