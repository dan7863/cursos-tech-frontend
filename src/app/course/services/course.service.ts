import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError, filter, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  COURSE_CARDS_API = 'http://localhost:3014/api/courses/cards';
  httpHeaders = new HttpHeaders().set('Content-type', 'application/json');
 
  constructor(private httpClient: HttpClient) { }

  getCourses(filterObj: any): Observable<any>{
  const queryParams = `?page=${filterObj.page}&limit=${filterObj.limit}`;
  this.COURSE_CARDS_API = this.COURSE_CARDS_API.split('?')[0] + queryParams;

    return this.httpClient.get(this.COURSE_CARDS_API, {headers: this.httpHeaders})
    .pipe(catchError(this.handleError));
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
