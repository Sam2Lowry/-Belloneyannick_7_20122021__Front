import { ApiService } from './../../auth/api.service';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss'],
})
export class UserProfileComponent implements OnInit {
  private sub!: Subscription;
  user: User | undefined;

  constructor(private route: ActivatedRoute, private apiservice: ApiService) {}

  ngOnInit(): void {
    this.getUser();
  }

  getUser(): void {
    const id = parseInt(this.route.snapshot.paramMap.get('id')!, 10);
    this.apiservice.getUser(id).subscribe((user) => (this.user = user));
  }

  ngOnDestroy(): void {}
}
