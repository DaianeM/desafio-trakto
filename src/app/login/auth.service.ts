import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';

import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly API: string = 'https://api.trakto.io/auth/signin';

  private token: string = '';

  constructor(private httpClient: HttpClient) { }

  handleLogin(user: User) {
    return this.httpClient.post<{ access_token: string }>(this.API, user).pipe(
      tap(response => {
        this.token = response.access_token;
        window.localStorage.setItem('token', this.token)
      })
    )

  }

  logout() {
    this.token = '';
    window.localStorage.removeItem('token');
  }

  getToken() {
    return this.token || window.localStorage.getItem('token');
  }

  userIsAuthenticated() {
    console.log(!!this.getToken())
    return !!this.getToken();
  }
}




