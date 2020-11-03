import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from './account/auth/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
	title = 'my-account';

	constructor(public authService: AuthenticationService) {}

	ngOnInit() {

	}
}
