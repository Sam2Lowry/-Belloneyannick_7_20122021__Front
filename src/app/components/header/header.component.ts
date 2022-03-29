import { Subscription } from 'rxjs';
import { ApiService } from './../../auth/api.service';
import { LoaderService } from './../tools/loader/loader.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import jwt_decode from 'jwt-decode';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  title: string = 'Groupomania';
  profileID!: number;
  userID!: string;

  navigateToHome() {
    this.router.navigateByUrl('/home');
  }
  navigateToFeed() {
    this.router.navigateByUrl('/feed');
  }
  navigateToLogin() {
    this.router.navigateByUrl('/login');
  }
  navigateToRegister() {
    this.router.navigateByUrl('/register');
  }
  navigateToProfile() {
    this.router.navigateByUrl('/users' + '/' + this.profileID);
  }
  navigateToLogout() {
    localStorage.removeItem('token');
    this.apiservice.isAuthenticated = false;
    this.router.navigateByUrl('/login');
  }

  constructor(
    public apiservice: ApiService,
    private router: Router,
    public loaderService: LoaderService
  ) {
    this.apiservice.isAuthenticated = !!localStorage.getItem('token');
  }

  ngOnInit(): void {
    console.log(this.apiservice.isAuthenticated);
    if (this.apiservice.isAuthenticated) {
      const tokenGrab: any = localStorage.getItem('token');
      const decoded: any = jwt_decode(tokenGrab);
      this.profileID = decoded.userId;
      console.log(this.profileID);
    } else {
      this.navigateToLogin();
    }
  }
}
