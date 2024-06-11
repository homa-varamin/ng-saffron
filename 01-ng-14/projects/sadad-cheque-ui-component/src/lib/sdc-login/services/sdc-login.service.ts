import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { map, timeout } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable()
export class SdcLoginService<T> {
  public loginApiUrl = '/api/login';
  public loginPageUrl = '/login';
  public currentUser!: BehaviorSubject<T>;
  public timeoutMiliseconds = 3 * 1000;
  public readonly currentUserKey = 'currentUser';

  constructor(private http: HttpClient, private router: Router) {
    const user = JSON.parse(localStorage.getItem(this.currentUserKey) + '');
    this.currentUser = new BehaviorSubject<T>(user);
  }

  login(username: string, password: string) {
    return this.http
      .post<any>(this.loginApiUrl, {
        username,
        password,
      })
      .pipe(
        map((user) => {
          localStorage.setItem(this.currentUserKey, JSON.stringify(user));
          this.currentUser.next(user);
          return user;
        }),
        timeout(this.timeoutMiliseconds)
      );
  }

  logout() {
    localStorage.removeItem(this.currentUserKey);
    this.currentUser.next(null as any);
    this.router.navigate([this.loginPageUrl]);
  }
}
