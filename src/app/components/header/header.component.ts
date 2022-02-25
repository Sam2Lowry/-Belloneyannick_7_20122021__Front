import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  title: string = 'Groupomania';
  navigateToHome() {
    this.router.navigateByUrl('/');
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
    this.router.navigateByUrl('/profile');
  }

  constructor(private router: Router) {}

  ngOnInit(): void {}
}
