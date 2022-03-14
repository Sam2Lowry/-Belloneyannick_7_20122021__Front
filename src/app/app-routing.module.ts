import { SingleFeedComponent } from './components/single-feed/single-feed.component';
import { AuthGuardService } from './auth/auth-guard.service';
import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanActivate } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { FeedComponent } from './components/feed/feed.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';

import { AuthGuardService as AuthGuard } from './auth/auth-guard.service';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'login',
  },
  {
    path: 'home',
    component: HomePageComponent,
  },
  {
    path: 'feed',
    children: [
      {
        path: '',
        component: FeedComponent,
      },
      {
        path: ':id',
        component: SingleFeedComponent,
      },
    ],
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'users/:id',
    component: UserProfileComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
