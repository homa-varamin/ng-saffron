import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpResponse,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HTTP_INTERCEPTORS,
} from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { delay, mergeMap, materialize, dematerialize } from 'rxjs/operators';

@Injectable()
export class DemoFakeBackendInterceptor implements HttpInterceptor {
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const { url, method, body } = request;

    return of(null)
      .pipe(mergeMap(handleRoute))
      .pipe(materialize())
      .pipe(delay(500))
      .pipe(dematerialize());

    function handleRoute() {
      switch (true) {
        case url.endsWith('/login') && method === 'POST':
          return authenticate();
        default:
          return next.handle(request);
      }
    }

    function authenticate() {
      const { username, password } = body;
      const isValid = username === 'test' && password === 'test';

      if (!isValid) return invalidUsernameOrPassword();

      return ok({
        id: 0,
        username: 'test',
        firstName: 'firstName',
        lastName: 'lastName',
        token: 'fake-jwt-token',
      });
    }

    function ok(body?: any) {
      return of(new HttpResponse({ status: 200, body }));
    }

    function error(message: any) {
      return throwError(() => new Error(message));
    }

    function invalidUsernameOrPassword() {
      const error = {
        status: 401,
        error: { message: 'Username or password is incorrect' },
      };
      return throwError(() => error);
    }
  }
}

export let fakeBackendProvider = {
  provide: HTTP_INTERCEPTORS,
  useClass: DemoFakeBackendInterceptor,
  multi: true,
};
