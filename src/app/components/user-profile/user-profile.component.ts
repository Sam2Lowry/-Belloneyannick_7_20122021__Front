import { ApiService } from './../../auth/api.service';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { ActivatedRoute } from '@angular/router';
import { Subscription, map } from 'rxjs';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss'],
})
export class UserProfileComponent implements OnInit {
  userId!: number | null;
  user!: User | null;
  private sub!: Subscription;

  constructor(
    private activatedRoute: ActivatedRoute,
    private apiservice: ApiService
  ) {}

  ngOnInit(): void {
    this.sub = this.activatedRoute.params.subscribe((params) => {
      this.userId = parseInt(params['id']);
      this.apiservice
        .getUser(this.userId)
        .subscribe((data: User) => (this.user = data));
      console.log(this.user);
    });
  }
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
