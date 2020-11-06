import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.scss']
})
export class EditEmployeeComponent implements OnInit {

	editForm: FormGroup;

	salary = ''
	pancard = ''
	Date = ''

  	constructor(public formBuilder: FormBuilder, public router: Router) { }

  	ngOnInit() {
		this.editForm = this.formBuilder.group({
	        employeeSalary: ['', Validators.required],
	        employeePancard: ['', [Validators.required, Validators.minLength(10)]],
	        Date: ['', Validators.required]
	    });
	}

	onSubmit() {
		this.router.navigate(['account/login']);
	}

}
