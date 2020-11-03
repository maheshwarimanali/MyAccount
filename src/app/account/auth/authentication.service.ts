import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})

export class AuthenticationService {
	constructor() {}

	authenticate(email, password) {
		if(email === "test@gmail.com" && password === "test1234") {
			localStorage.setItem('email', email)
			return true;
		} else {
			return false;
		}
	}

	isLoggedIn() {
		let user = localStorage.getItem('email')
		console.log(!(user === null))
		return !(user === null )		
	}
}