import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { tap, map, catchError } from 'rxjs/operators';

@Injectable()

export class PublicService{
  constructor(private http: HttpClient) {}

  getContinents(): Observable<any> {
    return this.http.get('https://thronesapi.com/api/v2/Continents').pipe(
      catchError(this.handleError)
    );
  }

  getCharacters(): Observable<any> {
    return this.http.get('https://thronesapi.com/api/v2/Characters').pipe(
      tap(console.log),
      map(response => response.filter((character: any) => character.lastName === 'Stark')),
      catchError(this.handleError)
    );
  }

  getCharacter(id: number): Observable<any> {
    return this.http.get('https://thronesapi.com/api/v2/Characters/' + id).pipe(
      catchError(this.handleError)
    );
  }

  createCharacter(character: any): Observable<any> {
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    }
    return this.http.post('https://thronesapi.com/api/v2/Characters', character, options).pipe(
      catchError(this.handleError)
    );
  }


  private handleError(error: any) {
    console.error(error);
    const errorMessage = 'Error status code ' + error.status + 'status' + error.statusText + 'at' + error.url;
    return throwError(errorMessage);
  }
}
