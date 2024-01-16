import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { SweetalertService } from '../../../shared/services/sweetalert/sweetalert.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recover',
  templateUrl: './recover.component.html',
  styleUrl: './recover.component.css'
})
export class RecoverComponent {

  formRecover!: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private router: Router, 
    private authService: AuthService,
    private sweetAlertService: SweetalertService){

  }

  ngOnInit(): void {
    this.formRecover = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
    });
  }

  onSubmit():void {
    // if (this.formRecover.valid) {
    
    //   this.authService.signIn(this.formRecover).subscribe({
    //     next:(res) => {
    //       this.cookieService.set('token', res.token);
    //       this.sweetAlertService.successAlert('You are successfully logged in');
    //       this.router.navigateByUrl("/")
    //     },
    //     error: (error) => {
    //       this.sweetAlertService.errorAlert(error);
    //     }
    //   });
    // }  
  }
}
