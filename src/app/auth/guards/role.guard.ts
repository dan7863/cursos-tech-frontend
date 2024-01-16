import { CanActivateFn } from '@angular/router';
import {inject} from '@angular/core';
import { AuthService } from '../services/auth.service';
import { SweetalertService } from '../../shared/services/sweetalert/sweetalert.service';

export const roleGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const sweetAlertService = inject(SweetalertService);

  if(!authService.getToken()) {
    sweetAlertService.errorAlert("Not Authorized");
    return false; 
  }
 
  const info = atob(authService.getToken().split('.')[1]);
  
  return true;
};
