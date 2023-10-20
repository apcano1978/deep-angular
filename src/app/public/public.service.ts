import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { tap, map, pluck, catchError } from 'rxjs/operators';
import { UserDto } from '../core/models/user-dto';

@Injectable()

export class PublicService{
  constructor(private http: HttpClient) {}

  login(loginData): Observable<any> {
    return this.http.post('https://thronesapi.com/api/v2/login', loginData).pipe(
      tap((data: any) => {
        localStorage.setItem('userName', data.userName);
        localStorage.setItem('token', data.token);
      }),
      catchError(this.handleError)
    )
  }

  getUsers(): Observable<any> {
    return this.http.get('https://reqres.in/api/users').pipe(
      catchError(this.handleError)
    );
  }

  getContinents(): Observable<any> {
    return this.http.get('https://thronesapi.com/api/v2/Continents').pipe(
      catchError(this.handleError)
    );
  }

  getCharacters(): Observable<any> {
    return this.http.get('https://thronesapi.com/api/v2/Characters').pipe(
      tap(x => console.log('personajes ---> ', x)),
      map((response: any) => {
        response.forEach((character: any) => {
          character['tv_show'] = 'Game of Thrones';
        });
        return response;

        // return response.map((character: any) => ({
        //   fullName: character.fullName,
        //   family: character.family,
        //   imageUrl: character.imageUrl,
        //   title: character.title,
        // }))
      }),
      catchError(this.handleError)
    );
  }

  getCharacter(id: number): Observable<any> {
    return this.http.get('https://thronesapi.com/api/v2/Characters/' + id).pipe(
      tap({ complete: () => console.log('Observable completado en getCharacter') }),
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
