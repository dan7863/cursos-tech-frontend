import { CanActivateFn } from '@angular/router';
import {inject} from '@angular/core';
import { AuthService } from '../services/auth.service';
import { ActivatedRouteSnapshot } from '@angular/router';
import { jwtDecode } from 'jwt-decode';

export const roleGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  // const router = inject(ActivatedRouteSnapshot);
  const decoder = inject(jwtDecode);

  console.log(decoder(authService.getToken()));
  
  // const expectedRole = router.data['expectedRole'];

  return true;
};
