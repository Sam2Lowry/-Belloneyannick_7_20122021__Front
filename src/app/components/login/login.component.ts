import { ApiService } from '../../auth/api.service';
import { Router } from '@angular/router';
import { FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  Loginform!: FormGroup;

  constructor(
    public fb: FormBuilder,
    public router: Router,
    public apiservice: ApiService
  ) {
    this.Loginform = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  submit(): void {
    console.log(this.Loginform.value);
    this.apiservice.signIn(this.Loginform.value);
    this.router.navigateByUrl('/home');
  }
}
