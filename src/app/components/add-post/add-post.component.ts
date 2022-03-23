import { ApiService } from './../../auth/api.service';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.scss'],
})
export class AddPostComponent implements OnInit {
  addPostform!: any;

  constructor(
    public fb: FormBuilder,
    public router: Router,
    public apiservice: ApiService
  ) {
    this.addPostform = this.fb.group({
      title: ['', Validators.required],
      body: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  submit(): void {
    console.log(this.addPostform.value);
    this.apiservice.createPost(this.addPostform.value);
    this.router.navigate(['/feed']);
  }
}
