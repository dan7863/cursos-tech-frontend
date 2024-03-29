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
    this.formRecover = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
    });
  }

  onSubmit():void {
    if (this.formRecover.valid) {
      this.recoverData.email = this.formRecover.get('email')!.value,
      this.authService.recover(this.recoverData).subscribe({
        next:(res) => {
          this.sweetAlertService.successAlert(res);
          // this.router.navigateByUrl("/")
        },
        error: (error) => {
          this.sweetAlertService.errorAlert(error);
        }
      });
    }  
  }
}
