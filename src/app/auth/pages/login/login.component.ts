import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Login } from '../../../models/user.model';
import { SweetalertService } from '../../../services/sweetalert/sweetalert.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{

  formLogin!: FormGroup;

  loginData: Login = {
    email: '',
    password: ''
  };

  constructor(private formBuilder: FormBuilder,
    private router: Router, 
    private authService: AuthService,
    private sweetAlertService: SweetalertService,
    private cookieService: CookieService){

  }
  
  ngOnInit(): void {
    this.formLogin = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  onSubmit():void {
    if (this.formLogin.valid) {

      // const director = new Director();
      // this.sweetAlertService.errorAlert(director,  errorMsg);
    }  
    this.loginData.email = this.formLogin.get('email')!.value,
    this.loginData.password = this.formLogin.get('password')!.value

    this.authService.signIn(this.loginData).subscribe({
      next:(res) => {
        this.cookieService.set('token', res.token);
        this.sweetAlertService.successAlert('You are successfully logged in');
        this.router.navigateByUrl("/")
      },
      error: (error) => {
        this.sweetAlertService.errorAlert(error);
      }
    });
  }
}
