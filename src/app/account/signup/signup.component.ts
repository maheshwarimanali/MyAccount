import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, NgForm } from '@angular/forms';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

	signupForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  	ngOnInit() {
	  	this.signupForm = this.formBuilder.group({
	        firstName: ['', Validators.required],
	        lastName: ['', Validators.required],
	        email: ['', [Validators.required, Validators.email]],
	        password: ['', [Validators.required, Validators.minLength(6)]]
	    });
	}

	get f() { return this.signupForm.controls; }

  	onSubmit() {
  		if (this.signupForm.invalid) {
            return;
        }
        console.log(this.signupForm.value);
  	}

}
