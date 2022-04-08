import { ApiService } from './../../auth/api.service';
import { Router } from '@angular/router';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.scss'],
})
export class AddPostComponent implements OnInit {
  addPostform!: FormGroup;
  updatePost: boolean = false;

  constructor(
    public fb: FormBuilder,
    public router: Router,
    public apiservice: ApiService
  ) {}

  ngOnInit(): void {
    this.addPostform = this.fb.group({
      title: ['', Validators.required],
      content: ['', Validators.required],
    });
  }

  submit(): void {
    console.log(this.addPostform.value);
    this.apiservice.createPost(this.addPostform.value);
    this.router.navigate(['/feed']);
  }
}
