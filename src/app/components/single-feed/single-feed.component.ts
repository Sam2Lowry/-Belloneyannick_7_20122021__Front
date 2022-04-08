import { FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ApiService } from './../../auth/api.service';
import { Subscription } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Comment } from '../../models/comment';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-feed',
  templateUrl: './single-feed.component.html',
  styleUrls: ['./single-feed.component.scss'],
})
export class SingleFeedComponent implements OnInit {
  private sub!: Subscription;
  comments: Comment[] = [];
  updatePost: boolean = false;
  addCommentForm: any;
  hidden = false;

  toggleBadgeVisibility() {
    this.hidden = !this.hidden;
  }

  constructor(
    private apiService: ApiService,
    private _snackBar: MatSnackBar,
    public fb: FormBuilder,
    private route: ActivatedRoute
  ) {
    this.addCommentForm = this.fb.group({
      content: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.getAllComments();
  }

  onSubmit(): any {
    console.log('pouet pouet pouet');
    /* this._snackBar.open('Comment created', '', {
      duration: 2000,
    });*/
  }

  // Récupération de tous les posts [A paginer par la suite]
  getAllComments(): void {
    const id = parseInt(this.route.snapshot.paramMap.get('id')!, 10);
    this.apiService.getAllComments(id).subscribe((res) => {
      this.comments = res;
      console.log('voici la réponse', this.comments);
    });
  }

  onUpdatePost(): void {
    this.updatePost = !this.updatePost;
  }
}
