import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { SignUp } from '../../../models/user.model';
import { SweetalertService } from '../../../shared/services/sweetalert/sweetalert.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  formSignup!: FormGroup;

  signUpData: SignUp= {
      name: '',
      email: '',
      password: '',
      confirmPassword: ''
  }

  constructor(private formBuilder: FormBuilder,
    private router: Router, 
    private authService: AuthService,
    private sweetAlertService: SweetalertService){

  }
  
  ngOnInit(): void {
    this.formSignup = this.formBuilder.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  onSubmit():void {
    if (this.formSignup.valid) {
      this.signUpData.name = this.formSignup.get('name')!.value,
      this.signUpData.email = this.formSignup.get('email')!.value,
      this.signUpData.password = this.formSignup.get('password')!.value
      this.signUpData.confirmPassword = this.formSignup.get('password')!.value

      this.authService.signUp(this.signUpData).subscribe({
        next:(res) => {
          this.sweetAlertService.successAlert(res);
          this.router.navigateByUrl("/");
        },
        error: (error) => {
          this.sweetAlertService.errorAlert(error);
        }
      });
    }  

  }
}
