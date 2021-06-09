import {
  HttpHandler,
  HttpHeaders,
  HttpInterceptor,
  HttpRequest,
  HttpXsrfTokenExtractor,
} from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class CustomHTTPInterceptor implements HttpInterceptor {
  constructor(private tokenExtractor: HttpXsrfTokenExtractor) {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    if (req.headers.get('noauth')) {
      return next.handle(req.clone());
    } else {
      const authRequest = req.clone({
        headers: new HttpHeaders({
          Airport: 'MAA',
        }),
      });
      const headerName = 'XSRF-TOKEN';
      const respHeaderName = 'X-XSRF-TOKEN';
      let token = this.tokenExtractor.getToken() as string;
      console.log('header token', token);
      if (token !== null && !req.headers.has(headerName)) {
        console.log('header token ADDED');
        req = req.clone({ headers: req.headers.set(respHeaderName, token) });
      }
      return next.handle(authRequest);
    }
  }
}
