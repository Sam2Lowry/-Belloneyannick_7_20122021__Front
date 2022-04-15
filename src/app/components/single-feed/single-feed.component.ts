import { Post } from './../../models/post';
import { FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ApiService } from './../../auth/api.service';
import { Component, OnInit } from '@angular/core';
import { Comment } from '../../models/comment';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-single-feed',
  templateUrl: './single-feed.component.html',
  styleUrls: ['./single-feed.component.scss'],
})
export class SingleFeedComponent implements OnInit {
  comments: Comment[] = [];
  addCommentForm: any;
  post!: Post;
  isUserAdmin!: boolean; // Affichage de la vue delete
  isUserAuthor!: boolean; // Affichage de la vue formulaire (mise à jour) pour edit le post
  updatePost: boolean = false;
  hidden = false;

  toggleBadgeVisibility() {
    this.hidden = !this.hidden;
  }

  constructor(
    private apiService: ApiService,
    private _snackBar: MatSnackBar,
    public fb: FormBuilder,
    private route: ActivatedRoute,
    private Auth: AuthService
  ) {
    this.addCommentForm = this.fb.group({
      content: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.getSingleFeed();
    this.getAllComments();
    this.isUserAdmin = this.Auth.isAdmin();
    this.isUserAuthor = this.Auth.getUserId() === this.post.author_id;
    console.log('isUserAdmin', this.isUserAdmin);
    console.log('isUserAuthor', this.isUserAuthor);
  }

  onSubmit(): any {
    console.log('pouet pouet pouet');
    this._snackBar.open('Comment created', '', {
      duration: 2000,
    });
  }

  // Récupération du post en fonction de l'id
  getSingleFeed(): void {
    const id = parseInt(this.route.snapshot.paramMap.get('id')!, 10);
    this.apiService.getPost(id).subscribe((res) => {
      this.post = res;

      console.log('voici la réponse post', this.post);
    });
  }

  // Récupération de tous les posts [A paginer par la suite]
  getAllComments(): void {
    const id = parseInt(this.route.snapshot.paramMap.get('id')!, 10);
    this.apiService.getAllComments(id).subscribe((res) => {
      this.comments = res;
      console.log('voici la réponse comment', this.comments);
    });
  }

  // Appel de fonction child to parent
  parentFun(): void {
    console.log('parent component function');
    this.openEditPost();
  }

  // Affichage de la vue formulaire (mise à jour) pour edit le post
  openEditPost(): void {
    this.updatePost = !this.updatePost;
  }
}
