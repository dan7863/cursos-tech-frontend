import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { AuthService } from '../../services/auth.service';
import { SweetalertService } from '../../../shared/services/sweetalert/sweetalert.service';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrl: './confirm.component.css'
})
export class ConfirmComponent{

  email!: string;
  token!: string;
  
  constructor(private cookieService: CookieService,
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService,
    private sweetAlertService: SweetalertService) {}
  
  ngOnInit() {
    this.email = this.route.snapshot.paramMap.get('email')!;
    this.token = this.route.snapshot.paramMap.get('token')!.replace(/\%2E/g, '.');

    this.authService.confirmEmail(this.email, this.token).subscribe({
      next:(res) => {
        this.cookieService.set('reset-token', this.token);
      },
      error: (error) => {
        this.sweetAlertService.errorAlert(error);
        this.router.navigateByUrl('/');
      }
    });
  }
}
