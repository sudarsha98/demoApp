import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required])
  })

  constructor(private router: Router) { }

  submit() {
    console.log('loginForm==', this.loginForm);
    console.log('loginFormValue==', this.loginForm.value);
    if (this.loginForm.value.email == 'Sudarshan@gmail.com' && this.loginForm.value.password == '123456') {
      this.router.navigate(['/admin/dashboard'])
    }
  }
  ngOnInit(): void {
  }
  get email() {
    return this.loginForm.get('email')
  }
  get password() {
    return this.loginForm.get('password')
  }
}
