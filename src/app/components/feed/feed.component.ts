import { AddPostComponent } from './../add-post/add-post.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss'],
})
export class FeedComponent implements OnInit {
  hidden = false;
  toggleBadgeVisibility() {
    this.hidden = !this.hidden;
  }

  constructor(private dialog: MatDialog) {}

  openDialog() {
    this.dialog.open(AddPostComponent);
  }

  ngOnInit(): void {}
}
