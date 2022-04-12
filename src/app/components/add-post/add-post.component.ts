import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ApiService } from './../../auth/api.service';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.scss'],
})
export class AddPostComponent implements OnInit {
  @Input() postDetails = [];
  postUpdateForm: any;

  constructor(public fb: FormBuilder, private apiService: ApiService) {}

  ngOnInit(): void {
    this.postUpdateForm = this.fb.group({
      title: ['', Validators.required],
      content: ['', Validators.required],
      image_url: [''],
    });
  }

  submit(): void {
    console.log('pouet pouet pouet');
  }
}
