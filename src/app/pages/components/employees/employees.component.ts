import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NgxPaginationModule } from 'ngx-pagination';
import { EmpolyeeCardComponent } from 'src/app/core/components/empolyee-card/empolyee-card.component';
import { Iuser } from 'src/app/core/interfaces/iuser';
import { EmployeesService } from 'src/app/core/services/employees.service';

@Component({
  selector: 'app-employees',
  standalone: true,
  imports: [CommonModule, EmpolyeeCardComponent, NgxPaginationModule],
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit {
  allEmployee: Iuser[] = [];
  pageSize: number = 0;
  currentPage:number=1;
  totalItems:number=0;
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
