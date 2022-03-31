import { FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ApiService } from './../../auth/api.service';
import { Subscription } from 'rxjs';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-single-feed',
  templateUrl: './single-feed.component.html',
  styleUrls: ['./single-feed.component.scss'],
})
export class SingleFeedComponent implements OnInit {
  private sub!: Subscription;
  addCommentForm: any;
  hidden = false;

  toggleBadgeVisibility() {
    this.hidden = !this.hidden;
  }

  constructor(
    private apiService: ApiService,
    private _snackBar: MatSnackBar,
    public fb: FormBuilder
  ) {
    this.addCommentForm = this.fb.group({
      content: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  onSubmit(): any {
    console.log('pouet pouet pouet');
    /* this._snackBar.open('Comment created', '', {
      duration: 2000,
    });*/
  }
}
