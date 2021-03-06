import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';


/** rxjs */
import { Observable, of, empty, SchedulerLike, EMPTY } from 'rxjs';
import { tap, mapTo, catchError, take, retry, map, concatMap, isEmpty } from 'rxjs/operators';
import { isNullOrUndefined } from 'util';
import { emptyScheduled } from 'rxjs/internal/observable/empty';

const headers = new HttpHeaders();
headers.append('Content-Type', 'application/json');
headers.append('Accept', 'application/json');
headers.append('Access-Control-Allow-Headers', 'Content-Type');
headers.append('Access-Control-Allow-Origin', 'http://localhost:4200');

const options = { headers };

@Injectable({
  providedIn: 'root'
})
export class SigninService {

  public errors: any = []; private readonly JWT_TOKEN = 'JWT_TOKEN';
  private readonly REFRESH_TOKEN = 'REFRESH_TOKEN';
  private loggedUser: string;
  tokens: boolean;

  constructor(private http: HttpClient) { }

  login(user: { username: string, password: string }): Observable<boolean> {
    console.log(this.tokens);
    return this.http.post<any>('http://127.0.0.1:8000/api-token-auth/', user, options)
      .pipe(
        mapTo(true),
        tap(tokens => this.doLoginUser(user.username, tokens)),
       map(tokens => this.tokens = tokens),
        retry(1),
        mapTo(true),
        catchError(error => {
          retry(1);
          return of(false);
        }));
  }

  logout() {
    return this.http.post<any>('/api-token-refresh/', {
      // tslint:disable-next-line:object-literal-key-quotes
      'refreshToken': this.getRefreshToken()
    }).pipe(
      tap(() => this.doLogoutUser()),
      mapTo(true),
      catchError(error => {
        alert(error.error);
        return of(false);
      }));
  }

  isLoggedIn() {
    return !!this.getJwtToken();
  }

  refreshToken() {
    return this.http.post<any>('/api-token-refresh/', {
      // tslint:disable-next-line:object-literal-key-quotes
      'refreshToken': this.getRefreshToken()
    }).pipe(tap((tokens: any) => {
      this.storeJwtToken(tokens.jwt);
    }));
  }

  getJwtToken() {
    return localStorage.getItem(this.JWT_TOKEN);
  }


  private doLoginUser(username: string, tokens: any) {
    this.loggedUser = username;
    this.tokens = tokens;
    this.storeTokens(tokens);
  }

  private doLogoutUser() {
    this.loggedUser = null;
    this.removeTokens();
  }

  private getRefreshToken() {
    return localStorage.getItem(this.REFRESH_TOKEN);
  }

  private storeJwtToken(jwt: string) {
    localStorage.setItem(this.JWT_TOKEN, jwt);
  }

  private storeTokens(tokens: any) {
    localStorage.setItem(this.JWT_TOKEN, tokens.jwt);
    localStorage.setItem(this.REFRESH_TOKEN, tokens.refreshToken);
  }

  private removeTokens() {
    localStorage.removeItem(this.JWT_TOKEN);
    localStorage.removeItem(this.REFRESH_TOKEN);
  }

 empty(scheduler?: SchedulerLike) {
    return scheduler ? emptyScheduled(scheduler) : EMPTY;
  }

 emptyScheduled(scheduler: SchedulerLike) {
  return new Observable<never>(subscriber => scheduler.schedule(() => subscriber.complete()));
}
}
