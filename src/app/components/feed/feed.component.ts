import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ApiService } from './../../auth/api.service';
import { Post } from './../../models/post';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss'],
})
export class FeedComponent implements OnInit {
  private sub!: Subscription;
  posts: Post[] = [];
  hidden = false;
  toggleBadgeVisibility() {
    this.hidden = !this.hidden;
  }

  constructor(private apiService: ApiService, private _snackBar: MatSnackBar) {}

  ngOnInit(): void {
    this.getAllPost();
    //this.getCounterComment();
  }

  // Récupération de tous les posts [A paginer par la suite]
  getAllPost(): void {
    this.apiService.getAllPosts().subscribe((res) => {
      this.posts = res;
      console.log(this.posts);
    });
  }
  // Récupération du nombre de commentaires d'un post
  /*getCounterComment(): void {
    this.apiService.getAllPosts().subscribe((res) => {
      this.posts = res;
      console.log(this.posts.length);
      return this.posts.length;
    });
  }
  */

  ngOnDestroy(): void {
    // this.sub.unsubscribe();
  }
}
