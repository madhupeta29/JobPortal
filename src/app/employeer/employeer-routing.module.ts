import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErDashoabrdComponent } from './er-dashoabrd/er-dashoabrd.component';

const routes: Routes = [{path: '', component: ErDashoabrdComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeerRoutingModule { }
