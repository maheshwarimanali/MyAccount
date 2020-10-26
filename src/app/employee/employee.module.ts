import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { EmployeeRoutingModule } from './employee-routing.module';
import { FormsModule } from '@angular/forms';
import { ViewEmployeeListComponent } from './view-employee-list/view-employee-list.component';
import { AddEmployeeComponent } from './view-employee-list/add-employee.component';
import { EmployeeService } from './view-employee-list/employee.service';

@NgModule({
  declarations: [ViewEmployeeListComponent, AddEmployeeComponent],
  imports: [
    CommonModule,
    FormsModule,
    EmployeeRoutingModule
  ],
  providers: [EmployeeService],
})
export class EmployeeModule { }
