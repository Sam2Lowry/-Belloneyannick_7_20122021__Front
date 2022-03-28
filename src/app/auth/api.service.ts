import { Injectable } from '@angular/core';
import { Observable, throwError, map } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { User } from '../models/user';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { Post } from '../models/post';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  endpoint: string = 'http://localhost:3000/api/v1';
  public isAuthenticated: boolean = false;

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
        this.setSession(res);
        this.isAuthenticated = true;
        this.router.navigate(['home']);
      });
  }

  // Logout
  doLogout() {
    let removeToken = localStorage.removeItem('token');
    if (removeToken == null) {
      this.router.navigate(['login']);
    }
  }

  // Get all users
  getUsers(): Observable<User[]> {
    const url = `${this.endpoint}/users/`;
    console.log(url);
    return this.http.get<User[]>(url);
  }

  //Get one user
  getUser(id: number): Observable<User> {
    const url = `${this.endpoint}/users/${id}`;
    console.log(url);
    return this.http.get<User>(url);
  }
  // Set session
  private setSession(authResult: any) {
    localStorage.setItem('token', authResult.token);
  }

  // Get all posts
  public getAllPosts(): Observable<Post[]> {
    const url = `${this.endpoint}/posts/`;
    console.log(url);
    return this.http.get<Post[]>(url);
  }

  // Get one post
  getPost(id: number): Observable<any> {
    const url = `${this.endpoint}/posts/${id}`;
    console.log(url);
    return this.http.get(url);
  }

  // Create a post and toggle the modal
  createPost(post: Post): Observable<Post> {
    const url = `${this.endpoint}/posts`;
    console.log(url);
    return this.http.post<Post>(url, post);
  }

  // Update post
  updatePost(post: Post): Observable<Post> {
    const url = `${this.endpoint}/posts/${post.id}`;
    console.log(url);
    return this.http.put<Post>(url, post);
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
  ngOnInit(): void {
    if (localStorage.getItem('token')) {
      this.isAuthenticated = true;
    } else {
      this.isAuthenticated = false;
    }
  }
}
