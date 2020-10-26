import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewEmployeeListComponent } from './view-employee-list/view-employee-list.component';
import { AddEmployeeComponent } from './view-employee-list/add-employee.component';

const routes: Routes = [
	{ path: 'View-employee-list', component: ViewEmployeeListComponent },
	{ path: 'Add-employee', component: AddEmployeeComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }