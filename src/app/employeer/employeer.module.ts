import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeerRoutingModule } from './employeer-routing.module';
import { ErDashoabrdComponent } from './er-dashoabrd/er-dashoabrd.component';


@NgModule({
  declarations: [
    ErDashoabrdComponent
  ],
  imports: [
    CommonModule,
    EmployeerRoutingModule
  ]
})
export class EmployeerModule { }
