import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeRoutingModule } from './employee-routing.module';
import { EmDashoabrdComponent } from './em-dashoabrd/em-dashoabrd.component';


@NgModule({
  declarations: [
    EmDashoabrdComponent
  ],
  imports: [
    CommonModule,
    EmployeeRoutingModule
  ]
})
export class EmployeeModule { }
