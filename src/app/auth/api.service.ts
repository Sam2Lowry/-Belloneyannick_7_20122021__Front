import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { User } from '../models/user';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  endpoint: string = 'http://localhost:3000/api/v1';

  constructor(private http: HttpClient, public router: Router) {}

  // Register
  signUp(user: User): Observable<any> {
    let api = `${this.endpoint}/auth/register`;
    return this.http.post(api, user).pipe(catchError(this.handleError));
  }
  // Login
  signIn(user: User) {
    return this.http
      .post<any>(`${this.endpoint}/auth/login`, user)
      .subscribe((res: any) => {
        this.router.navigate(['home']);
      });
  }
  doLogout() {
    let removeToken = localStorage.removeItem('token');
    if (removeToken == null) {
      this.router.navigate(['login']);
    }
  }
  // User profile
  getUserProfile(id: any): Observable<any> {
    let api = `${this.endpoint}/users/${id}`;
    return this.http.get(api).pipe(
      map((res: any) => {
        return res || {};
      }),
      catchError(this.handleError)
    );
  }
  // Error
  handleError(error: HttpErrorResponse) {
    let msg = '';
    if (error.error instanceof ErrorEvent) {
      // client-side error
      msg = error.error.message;
    } else {
      // server-side error
      msg = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return msg;
  }

  // Get all users
  getAllUsers(): Observable<any> {
    let api = `${this.endpoint}/users`;
    return this.http.get(api).pipe(
      map((res: any) => {
        return res || {};
      }),
      catchError(this.handleError)
    );
  }

  //Get one user
  getUser(id: any): Observable<any> {
    let api = `${this.endpoint}/users/${id}`;
    return this.http.get(api).pipe(
      map((res: any) => {
        return res || {};
      }),
      catchError(this.handleError)
    );
  }
}
