import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../auth/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

	email = ''
	password = ''
	invalidLogin = false

  	constructor(public router: Router, public authService: AuthenticationService) { }

  	ngOnInit(): void {
  	}

  	onSubmit(loginForm: NgForm) {
  		if(this.authService.authenticate(this.email, this.password)) {
  			this.router.navigate(['employee/View-employee-list'])
  		} else
  			this.invalidLogin = true;
  	}

}
