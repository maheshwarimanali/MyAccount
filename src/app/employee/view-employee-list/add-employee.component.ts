import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup } from '@angular/forms';
import { EmployeeService } from './employee.service';
import { Router } from '@angular/router';
import { Employee } from '../models/employee.model';


@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.scss']
})
export class AddEmployeeComponent implements OnInit { 
	
	employee: Employee = {
		id: null,
		name: null,
		destination: null,
		department: 'select'
	};

	constructor(private employeeService: EmployeeService, private router: Router) {}
	ngOnInit(): void {
  	}

  	onSubmit(): void {
		this.employeeService.save(this.employee);
		this.router.navigate(['employee/View-employee-list'])

  	}


}