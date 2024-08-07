import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeesService } from 'src/app/core/services/employees.service';
import { Iuser } from 'src/app/core/interfaces/iuser';
import { EmpolyeeCardComponent } from 'src/app/core/components/empolyee-card/empolyee-card.component';

@Component({
  selector: 'app-employees',
  standalone: true,
  imports: [CommonModule,EmpolyeeCardComponent],
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit {
  allEmployee: Iuser[] = [];
  constructor(private _employeesService: EmployeesService) { }

  ngOnInit(): void {
    this.getAllUsers();
  }

  getAllUsers() {
    this._employeesService.getAllEmployee().subscribe({
      next: (res) => {
        // console.log(res.data);
        this.allEmployee=res.data;
      },
      error:(err)=>{
        console.log(err);
        
      }
    })
  }

}
