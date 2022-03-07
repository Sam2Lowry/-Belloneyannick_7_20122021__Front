import { Router } from '@angular/router';
import { ApiService } from './../../api.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  RegisterForm!: FormGroup;

  constructor(
    public fb: FormBuilder,
    public apiservice: ApiService,
    public router: Router
  ) {
    this.RegisterForm = this.fb.group({
      display_name: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  submit() {
    console.log(this.RegisterForm.value);
    this.apiservice.signUp(this.RegisterForm.value).subscribe((res) => {
      if (res.result) {
        console.log(res);
        this.RegisterForm.reset();
        this.router.navigate(['/login']);
      }
    });
  }
}
