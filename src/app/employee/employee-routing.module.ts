import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmDashoabrdComponent } from './em-dashoabrd/em-dashoabrd.component';

const routes: Routes = [{path: '',component: EmDashoabrdComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
