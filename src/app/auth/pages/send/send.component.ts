import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { SweetalertService } from '../../../shared/services/sweetalert/sweetalert.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';


@Component({
  selector: 'app-send',
  templateUrl: './send.component.html',
  styleUrl: './send.component.css'
})
export class SendComponent {
  formResend!: FormGroup;

  recoverData ={
    email: '',
    url: 'http://localhost:4200/auth'
  };

  constructor(private formBuilder: FormBuilder,
    private router: Router, 
    private authService: AuthService,
    private sweetAlertService: SweetalertService){
  }

  ngOnInit(): void {
    this.formResend = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
    });
  }

  onSubmit():void {
    if (this.formResend.valid) {
      this.recoverData.email = this.formResend.get('email')!.value,
      this.authService.resend(this.recoverData).subscribe({
        next:(res) => {
          this.sweetAlertService.successAlert(res.message);
          this.router.navigateByUrl("/auth/login")
        },
        error: (error) => {
          this.sweetAlertService.errorAlert(error);
        }
      });
    }  
  }
}
