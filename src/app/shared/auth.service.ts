import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLoggedIn = false;
  redirectUrl!: string;

  constructor() { }

  login(login: string, password: string): any {
    return login === 'admin' && password === '123' ? this.isLoggedIn = true : false;
  }

  logout(): void {
    this.isLoggedIn = false;
  }
}
