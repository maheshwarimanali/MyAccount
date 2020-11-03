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

	deleteEmployee(id: number) {
		const i = this.employeeList.findIndex(e => e.id === id);
		if(i !== -1) {
			this.employeeList.splice(i, 1);
		}
	}
}