import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '', loadComponent: () => import('./core/components/layout/layout.component').then(c => c.LayoutComponent), children: [

      { path: '', redirectTo: 'employee', pathMatch: 'full' },
      {
        path: 'employee', loadChildren: () => import('./pages/employee/employee.module').then(m => m.EmployeeModule)
      },
      { path: '**', loadComponent: () => import('./pages/notfound/notfound.component').then(c => c.NotfoundComponent), title: 'Not Found' }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
