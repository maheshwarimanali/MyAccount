import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewEmployeeListComponent } from './view-employee-list/view-employee-list.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { EditEmployeeComponent } from './edit-employee/edit-employee.component';

const routes: Routes = [
	{ path: 'View-employee-list', component: ViewEmployeeListComponent },
	{ path: 'Add-employee', component: AddEmployeeComponent },
	{path: 'Edit-employee', component: EditEmployeeComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }