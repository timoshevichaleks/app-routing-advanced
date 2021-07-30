import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {delay, map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLoggedIn = false;
  redirectUrl!: string;

  constructor() { }

  login(login: string, password: string): Observable<boolean | any> {
    const observable = of({login: 'admin', password: '123'}).pipe(delay(1000));

    // const promise = new Promise(resolve => {
    //   setTimeout(() => {
    //     resolve({
    //       login: 'admin',
    //       password: '123'
    //     })
    //   }, 1000)
    // })

    // return promise.then((res: any) => {
    //   return login === res.login && password === res.password ? this.isLoggedIn = true : false;
    // })

    return observable.pipe(map((res: any) => login === res.login && password === res.password ? this.isLoggedIn = true : false));
  }

  logout(): void {
    this.isLoggedIn = false;
  }
}
