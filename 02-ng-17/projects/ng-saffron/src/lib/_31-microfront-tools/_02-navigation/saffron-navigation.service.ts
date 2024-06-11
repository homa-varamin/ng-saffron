import { Injectable } from '@angular/core';
import { Observable, ReplaySubject } from 'rxjs';
import { Navigation } from './navigation.types';

@Injectable({ providedIn: 'root' })
export class SaffronNavigationService {
  public navigationReplaySubject: ReplaySubject<Navigation> =
    new ReplaySubject<Navigation>(1);

  /**
   * Constructor
   */
  constructor() {}

  // -----------------------------------------------------------------------------------------------------
  // @ Accessors
  // -----------------------------------------------------------------------------------------------------

  /**
   * Getter for navigation
   */
  get navigation$(): Observable<Navigation> {
    return this.navigationReplaySubject.asObservable();
  }

  // -----------------------------------------------------------------------------------------------------
  // @ Public methods
  // -----------------------------------------------------------------------------------------------------

  /**
   * Get all navigation data
   */
  get(): Observable<Navigation> {
    return this.navigationReplaySubject;
  }
}
