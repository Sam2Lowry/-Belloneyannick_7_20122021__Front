import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ApiService } from './../../auth/api.service';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.scss'],
})
export class AddPostComponent implements OnInit {
  postUpdateForm: any;
  @Output('parentFun') parentFun: EventEmitter<any> = new EventEmitter();

  constructor(
    public fb: FormBuilder,
    private apiService: ApiService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.postUpdateForm = this.fb.group({
      title: ['', Validators.required],
      content: ['', Validators.required],
      image_url: [''],
    });
    this.fillEditForm();
  }

  submit(): void {
    /* console.log('pouet pouet pouet'); */
    this.parentFun.emit();
  }

  fillEditForm(): void {
    const id = parseInt(this.route.snapshot.paramMap.get('id')!, 10);
    this.apiService.getPost(id).subscribe((res) => {
      this.postUpdateForm.patchValue({
        title: res.title,
        content: res.content,
        image_url: res.image_url,
      });
    });
  }
}
