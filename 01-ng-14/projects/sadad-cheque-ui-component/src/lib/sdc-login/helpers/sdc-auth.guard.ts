import { Injectable } from '@angular/core';
import {
  Router,
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';
import { SdcLoginService } from '../services/sdc-login.service';

@Injectable()
export class SdcAuthGuard implements CanActivate {
  constructor(
    private router: Router,
    private loginService: SdcLoginService<any>
  ) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const currentUser = this.loginService.currentUser.value;
    if (currentUser) {
      return true;
    }

    this.router.navigate([this.loginService.loginPageUrl], {
      queryParams: { returnUrl: state.url },
    });
    return false;
  }
}
