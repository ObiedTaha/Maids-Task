import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { EmpolyeeCardComponent } from 'src/app/pages/employee/empolyee-card/empolyee-card.component';
import { IUser } from 'src/app/core/interfaces/user';
import { EmployeesService } from 'src/app/core/services/employees.service';

@Component({
  selector: 'app-employees',
  standalone: true,
  imports: [CommonModule, EmpolyeeCardComponent, NgxPaginationModule,FormsModule],
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit {
  allEmployee: IUser[] = [];
  pageSize: number = 0;
  currentPage:number=1;
  totalItems:number=0;

  searchTerm:number=0;

  constructor(private _employeesService: EmployeesService) { }

  ngOnInit(): void {
    this.getAllUsers();
  }

  getAllUsers() {
    this._employeesService.getAllEmployee().subscribe({
      next: (res) => {
        this.allEmployee = res.data;
        this.pageSize=res.per_page;
        this.currentPage=res.page;
        this.totalItems=res.total;
      }
    })
  }

  pageChanged(event:any):void{
    console.log(event);
    this._employeesService.getAllEmployee(event).subscribe({
      next: (res) => {
        this.allEmployee = res.data;
        this.pageSize=res.per_page;
        this.currentPage=res.page;
        this.totalItems=res.total;
      }
    })
    
  }

}
