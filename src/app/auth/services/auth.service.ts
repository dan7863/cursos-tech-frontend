import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Login, SignUp } from '../../models/user.model';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { CookieService } from 'ngx-cookie-service';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  LOGIN_API: string = 'http://localhost:3014/api/signin';
  REGISTER_API: string = 'http://localhost:3014/api/signup';

  httpHeaders = new HttpHeaders().set('Content-type', 'application/json');

  constructor(private httpClient: HttpClient, 
    private cookieService: CookieService,
    private jwtHelper: JwtHelperService) { }

  signIn(data: Login): Observable<any>{
    return this.httpClient.post(this.LOGIN_API, data, {headers: this.httpHeaders})
    .pipe(catchError(this.handleError));
  }

  signUp(data: SignUp): Observable<any>{
    return this.httpClient.post(this.REGISTER_API, data, {headers: this.httpHeaders})
    .pipe(catchError(this.handleError));
  }

  recover(data: any): Observable<any>{
    return this.httpClient.post(this.REGISTER_API, data, {headers: this.httpHeaders})
    .pipe(catchError(this.handleError));
  }

  isAuth(): boolean{
    const token = this.cookieService.get('token');
    if(this.jwtHelper.isTokenExpired(token) || !token){
      return false;
    }
    return true;
  }

  getToken(): string{
    return this.cookieService.get('token');
  }

  handleError(error: HttpErrorResponse) {
    let errorMsg: string = '';
    if (error.error instanceof ErrorEvent) {
      errorMsg = error.error.message;
    } 
    else if (error.error.message) {
      errorMsg = error.error.message;
    }
    else if(error.error.error){
      error.error.error.forEach((element: any) => {
          errorMsg += "</br>" + element.message;
      });
    }

    return throwError(() => errorMsg);
  }

}
