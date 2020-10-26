import { Component, OnInit } from '@angular/core';
import { Employee } from '../models/employee.model';
import { EmployeeService } from './employee.service';

@Component({
  selector: 'app-view-employee-list',
  templateUrl: './view-employee-list.component.html',
  styleUrls: ['./view-employee-list.component.scss']
})
export class ViewEmployeeListComponent implements OnInit {

	employees: Employee[];
  	constructor(private employeeService: EmployeeService) { }

  	ngOnInit(): void {
  		this.employees = this.employeeService.getEmployees();

  	}


}
