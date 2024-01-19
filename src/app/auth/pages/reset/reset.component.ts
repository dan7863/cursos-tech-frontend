import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { SweetalertService } from '../../../shared/services/sweetalert/sweetalert.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrl: './reset.component.css'
})
export class ResetComponent implements OnInit{
  email!: string;
  token!: string;

  formReset!: FormGroup;

  recoverData ={
    password: '',
    confirmPassword: ''
  };

  constructor(private route: ActivatedRoute, 
    private authService: AuthService,
    private sweetAlertService: SweetalertService,
    private router: Router,
    private formBuilder: FormBuilder,
    private cookieService: CookieService) {}

  ngOnInit() {
    this.email = this.route.snapshot.paramMap.get('email')!;
    this.token = this.route.snapshot.paramMap.get('token')!.replace(/\%2E/g, '.');

    this.authService.validateRequestPassword(this.email, this.token).subscribe({
      next:(res) => {
        this.cookieService.set('reset-token', this.token);
      },
      error: (error) => {
        this.sweetAlertService.errorAlert(error);
        this.router.navigateByUrl('/');
      }
    });

    this.formReset = this.formBuilder.group({
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  onSubmit():void {
    if (this.formReset.valid) {

      this.recoverData.password = this.formReset.get('password')!.value
      this.recoverData.confirmPassword = this.formReset.get('password')!.value

      this.authService.reset(this.recoverData).subscribe({
        next:(res) => {
          this.sweetAlertService.successAlert(res);
          this.cookieService.delete('reset-token');
          this.router.navigateByUrl("auth/login");
        },
        error: (error) => {
          this.sweetAlertService.errorAlert(error);
        }
      });
    }  

  }
}
