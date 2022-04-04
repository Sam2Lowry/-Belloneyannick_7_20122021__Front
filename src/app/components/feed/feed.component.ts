import { Component, OnInit } from '@angular/core';
import { ApiService } from './../../auth/api.service';
import { Post, Count } from './../../models/post';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss'],
})
export class FeedComponent implements OnInit {
  posts: Post[] = [];
  addPostForm: any;
  hidden = false;

  toggleBadgeVisibility() {
    this.hidden = !this.hidden;
  }

  constructor(
    private apiService: ApiService,
    private _snackBar: MatSnackBar,
    public fb: FormBuilder,
    private router: Router
  ) {
    this.addPostForm = this.fb.group({
      title: ['', Validators.required],
      content: ['', Validators.required],
      image_url: [''],
    });
  }

  ngOnInit(): void {
    this.getAllPost();
  }

  // Récupération de tous les posts [A paginer par la suite]
  getAllPost(): void {
    this.apiService.getAllPosts().subscribe((res) => {
      this.posts = res;
      console.log('voici la réponse', this.posts);
    });
  }

  submit(): any {
    console.log(this.addPostForm.value);
    this.apiService
      .createPost(this.addPostForm.value)
      .subscribe((_) => this.getAllPost());
    this._snackBar.open('Post crée !', '', {
      duration: 2000,
    });
  }

  // Changement de vue pour commentaires détaillés
  navigateToComments(id: number): void {
    console.log(id);
    this.router.navigate(['/feed/' + id]);
  }
}
