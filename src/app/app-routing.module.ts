import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginModule)
  },
  {
    path: 'employee',
    loadChildren: () => import('./employee/employee.module').then(m => m.EmployeeModule)
  },
  {
    path: 'employeer',
    loadChildren: () => import('./employeer/employeer.module').then(m => m.EmployeerModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
