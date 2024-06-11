import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { SdcLoginService } from '../services/sdc-login.service';

@Injectable()
export class SdcJwtInterceptor implements HttpInterceptor {
  constructor(private loginService: SdcLoginService<any>) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const userHasToken = this.getUserToken();
    if (userHasToken) {
      request = request.clone({
        setHeaders: {
            Authorization: `Bearer ${userHasToken}`
        }
    });
    }

    return next.handle(request);
  }

  getUserToken(): string {
    const currentUser = this.loginService.currentUser.value;
    return currentUser ? currentUser.token : undefined;
  }
}
