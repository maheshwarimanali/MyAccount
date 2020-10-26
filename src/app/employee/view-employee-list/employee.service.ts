import { Injectable } from '@angular/core';
import { Employee } from '../models/employee.model';

@Injectable()
export class EmployeeService {
	 private EmployeeList : Employee[] = [
		{
			id: 1,
			name: 'xyz',
			destination: 'Jalgaon',
			department: 'development' 
		},
		{
			id: 2,
			name: 'pqr',
			destination: 'Jalgaon',
			department: 'development'
		},
		{
			id: 3,
			name: 'demo',
			destination: 'Jalgaon',
			department: 'development'
		},
	];

	getEmployees(): Employee[] {
		return this.EmployeeList;
	}

	save(employee: Employee) {
		this.EmployeeList.push(employee);
	}

}