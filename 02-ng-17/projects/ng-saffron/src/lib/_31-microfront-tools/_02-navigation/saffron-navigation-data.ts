import { Injectable } from '@angular/core';
import {
  FuseNavigationItem,
  Navigation,
  compactNavigation,
  defaultNavigation,
  futuristicNavigation,
  horizontalNavigation,
} from '../microfront-tools-public-api';
/* import { cloneDeep } from 'lodash-es'; */

@Injectable({ providedIn: 'root' })
export class SaffronCustomNavigationData {
  public navigationData!: Navigation;
  private readonly _compactNavigation: FuseNavigationItem[] = compactNavigation;
  private readonly _defaultNavigation: FuseNavigationItem[] = defaultNavigation;
  private readonly _futuristicNavigation: FuseNavigationItem[] =
    futuristicNavigation;
  private readonly _horizontalNavigation: FuseNavigationItem[] =
    horizontalNavigation;

  constructor() {
    this.setData();
  }
  private setData(): void {
    // Fill compact navigation children using the default navigation
    this._compactNavigation.forEach((compactNavItem) => {
      this._defaultNavigation.forEach((defaultNavItem) => {
        if (defaultNavItem.id === compactNavItem.id) {
          compactNavItem.children = this.cloneDeep(defaultNavItem.children);
        }
      });
    });

    // Fill futuristic navigation children using the default navigation
    this._futuristicNavigation.forEach((futuristicNavItem) => {
      this._defaultNavigation.forEach((defaultNavItem) => {
        if (defaultNavItem.id === futuristicNavItem.id) {
          futuristicNavItem.children = this.cloneDeep(defaultNavItem.children);
        }
      });
    });

    // Fill horizontal navigation children using the default navigation
    this._horizontalNavigation.forEach((horizontalNavItem) => {
      this._defaultNavigation.forEach((defaultNavItem) => {
        if (defaultNavItem.id === horizontalNavItem.id) {
          horizontalNavItem.children = this.cloneDeep(defaultNavItem.children);
        }
      });
    });

    this.navigationData = {
      compact: this.cloneDeep(this._compactNavigation),
      default: this.cloneDeep(this._defaultNavigation),
      futuristic: this.cloneDeep(this._futuristicNavigation),
      horizontal: this.cloneDeep(this._horizontalNavigation),
    };
  }

  private cloneDeep(obj: any): any {
    if (typeof obj !== 'object' || obj === null) {
      return obj;
    }

    try {
      return structuredClone(obj);
    } catch (error) {
      // Fallback to recursive cloning if structuredClone fails
      return this.cloneDeep(obj);
    }
  }
}
