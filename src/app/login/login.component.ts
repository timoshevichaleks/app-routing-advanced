import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  userLogin = 'admin';
  userPassword = '123';
  message = '';

  constructor(
    public authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.setMessage();
  }

  login() {
    this.authService.login(this.userLogin, this.userPassword);
    this.setMessage();
    this.router.navigate([this.authService.redirectUrl]).then();
  }

  logout() {
    this.authService.logout();
    this.setMessage();
  }

  private setMessage(): void {
    this.message = `Logged ${this.authService.isLoggedIn ? 'in' : 'out'}`;
  }

}
