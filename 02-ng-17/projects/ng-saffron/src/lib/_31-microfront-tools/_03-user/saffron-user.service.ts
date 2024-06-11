import { Injectable } from '@angular/core';
import { Observable, ReplaySubject } from 'rxjs';
import { SaffronUser } from './saffron-user.types';

@Injectable({ providedIn: 'root' })
export class SaffronUserService {
  private _user: ReplaySubject<SaffronUser> = new ReplaySubject<SaffronUser>(1);

  constructor() {}
  set user(value: SaffronUser) {
    this._user.next(value);
  }

  get user$(): Observable<SaffronUser> {
    return this._user.asObservable();
  }
}
