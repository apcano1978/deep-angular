import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, tap, catchError } from 'rxjs/operators';

@Injectable()

export class PublicService{
  constructor(private http: HttpClient) {}

  getCharacters(): Observable<any> {
    return this.http.get('https://thronesapi.com/api/v2/Characters').pipe(
      catchError(this.handleError)
    )
  }

  getContinents(): Observable<any> {
    return this.http.get('https://thronesapi.com/api/v2/Continents').pipe(
      catchError(this.handleError)
    )
  }

  private handleError(error: Response) {
    console.log(error);
    const msg = 'Error status code' + error.status + 'status' +   error.statusText + ' at ' + error.url;
    return throwError(msg);
  }
}
