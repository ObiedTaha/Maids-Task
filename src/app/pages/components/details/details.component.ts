import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { EmployeesService } from 'src/app/core/services/employees.service';
import { Iuser } from 'src/app/core/interfaces/iuser';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule, MatButtonModule, RouterLink],
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  employeeId: number = 0;
  specificEmployee: Iuser = {} as Iuser;

  constructor(private _activatedRoute: ActivatedRoute, private _employeesService: EmployeesService) { }

  ngOnInit(): void {
    this.getEmployeeIdFromUrl();
    this.getEmployeeById();

  }

  getEmployeeIdFromUrl() {
    this._activatedRoute.paramMap.subscribe({
      next: (res: any) => {
        this.employeeId = res.params.id
        console.log(this.employeeId);
      }
    })
  }


  getEmployeeById() {
    this._employeesService.getEmployeeById(this.employeeId).subscribe({
      next: (res) => {
        this.specificEmployee =res.data;
        console.log(this.specificEmployee);


      }
    })
  }


}
