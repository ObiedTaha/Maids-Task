import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';
import { NgxPaginationModule } from 'ngx-pagination';
import { Observable } from 'rxjs';
import { CardComponent } from 'src/app/pages/employee/card/card.component';
import { loadEmployees } from './model/actions';
import { IEmployeeState } from './model/reducer';

@Component({
  selector: 'app-employees',
  standalone: true,
  imports: [CommonModule, CardComponent, NgxPaginationModule, FormsModule, CommonModule],
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {
  Employees$!: Observable<IEmployeeState>;
  searchTerm: number = 0;

  constructor(private store: Store<{ employee: IEmployeeState }>) {
    this.Employees$ = store.select(state => state.employee)
  }

  ngOnInit(): void {
    this.store.dispatch(loadEmployees({ page: 1 }));

  }

  pageChanged(event: any): void {
    this.store.dispatch(loadEmployees({ page: event }));
  }

}
