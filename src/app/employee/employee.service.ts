import { Injectable } from '@angular/core';
import { Employee } from './models/employee.model';

@Injectable()
export class EmployeeService {
	 private employeeList : Employee[] = [];
	

	getEmployees(): Employee[] {
		return this.employeeList;
	}

	save(employee: Employee) {
		this.employeeList.push(employee);
	}
}