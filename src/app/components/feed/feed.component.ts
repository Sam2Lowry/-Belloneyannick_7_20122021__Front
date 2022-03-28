import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ApiService } from './../../auth/api.service';
import { Post } from './../../models/post';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormGroup } from '@angular/forms';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss'],
})
export class FeedComponent implements OnInit {
  private sub!: Subscription;
  posts: Post[] = [];
  addPostForm: any;
  hidden = false;

  toggleBadgeVisibility() {
    this.hidden = !this.hidden;
  }

  constructor(
    private apiService: ApiService,
    private _snackBar: MatSnackBar,
    public fb: FormBuilder
  ) {
    this.addPostForm = this.fb.group({
      title: ['', Validators.required],
      content: ['', Validators.required],
      image_url: [''],
    });
  }

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
  getCounterComment(): void {
    this.apiService.getAllPosts().subscribe((res) => {
      this.posts = res;
      console.log(this.posts.length);
      return this.posts.length;
    });
  }
  submit(): void {
    console.log(this.addPostForm.value);
    this.apiService.createPost(this.addPostForm.value);
    this._snackBar.open('Post created', '', {
      duration: 2000,
    });
    this.getAllPost();
    this.addPostForm.reset();
  }

  ngOnDestroy(): void {
    // this.sub.unsubscribe();
  }
}
