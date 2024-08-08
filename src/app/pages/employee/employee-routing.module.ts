import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadComponent: () => import('./employees.component').then(c => c.EmployeesComponent), title: 'Employee' },
  { path: ':id', loadComponent: () => import('./details/details.component').then(c => c.DetailsComponent), title: 'Employee Details' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
