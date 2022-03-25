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
  public isAuthenticated: boolean = false;
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

  constructor(private router: Router, public loaderService: LoaderService) {}

  ngOnInit(): void {
    if (localStorage.getItem('token')) {
      this.isAuthenticated = true;
      const tokenGrab: any = localStorage.getItem('token');
      const decoded: any = jwt_decode(tokenGrab);
      this.profileID = decoded.userId;
      console.log('voici le code', this.profileID);
    } else {
      this.isAuthenticated = false;
    }
  }
}
