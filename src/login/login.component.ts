import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private fb: FormBuilder, private toastr: ToastrService, private router:Router) { }
  loading = false;
  submitted = false;
  loginForm = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required]
  });

  ngOnInit() {
  }
  get f() { return this.loginForm.controls; }

  onLogin() {
    this.submitted = true;
    if (this.loginForm.invalid) {
      return;
    } else {
      if(this.loginForm.value.username?.trim().length == 0 || this.loginForm.value.password?.trim().length == 0){
        this.toastr.error('Username or Password Cannot be empty!');
      }else if (this.loginForm.value.username === "admin" && this.loginForm.value.password === "admin") {
        this.toastr.success('Login Success!');
        sessionStorage.setItem("user","admin")
        this.router.navigate(['/customer-details']);
      } else {
        this.toastr.error('Incorrect Username or Password!');
      }
    }
  }

}
