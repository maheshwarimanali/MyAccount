import { Component, OnInit, Input } from '@angular/core';
import { Employee } from '../models/employee.model';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-employee-list',
  templateUrl: './view-employee-list.component.html',
  styleUrls: ['./view-employee-list.component.scss']
})
export class ViewEmployeeListComponent implements OnInit {
	id: number;
	employees: Employee[];
  	constructor(public employeeService: EmployeeService, public router: Router) { }

  	ngOnInit(): void {
  		this.employees = this.employeeService.getEmployees();

  	}

  	editEmployee(id: number) {
  		this.router.navigate(['employee/Edit-employee']);
  	}

  	deleteEmployee(employee: Employee) {
  		this.employees = this.employees.filter(currentEmployee => currentEmployee !== employee);
  	}
}
