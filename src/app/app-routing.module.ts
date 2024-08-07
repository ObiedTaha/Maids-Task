import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'',redirectTo:'employee',pathMatch:'full'},
  {path:'employee',loadComponent:()=>import('./pages/components/employees/employees.component').then(c=>c.EmployeesComponent),title:'Employee'},
  {path:'details/:id',loadComponent:()=>import('./pages/components/details/details.component').then(c=>c.DetailsComponent),title:'Employee Details'},
  
  {path:'**',loadComponent:()=>import('./pages/components/notfound/notfound.component').then(c=>c.NotfoundComponent),title:'Not Found'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
