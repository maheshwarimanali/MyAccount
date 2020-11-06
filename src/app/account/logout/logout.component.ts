import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../auth/authentication.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {

  	constructor(public router: Router, public authService: AuthenticationService) { }

	ngOnInit(): void {
	  	this.authService.logOut();
	    this.router.navigate(['account/login']);
	}

}
