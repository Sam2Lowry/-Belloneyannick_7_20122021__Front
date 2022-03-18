import { Post } from './../../models/post';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddPostComponent } from './../add-post/add-post.component';
import { Subscription } from 'rxjs';
import { ApiService } from './../../auth/api.service';
import { ActivatedRoute } from '@angular/router';
import { PositionStrategy } from '@angular/cdk/overlay';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss'],
})
export class FeedComponent implements OnInit {
  private sub!: Subscription;
  posts: Post | undefined;
  hidden = false;
  toggleBadgeVisibility() {
    this.hidden = !this.hidden;
  }

  constructor(private dialog: MatDialog, private apiService: ApiService) {}

  openDialog() {
    this.dialog.open(AddPostComponent);
  }

  ngOnInit(): void {
    this.getAllPost();
  }

  getAllPost(): void {
    this.apiService.getPosts().subscribe((posts) => (this.posts = posts));
    console.log(this.posts);
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
