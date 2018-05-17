import { Injectable, Inject } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { BASE_API } from '../../tokens';

@Injectable()
export class UrlInterceptor implements HttpInterceptor {
  constructor(@Inject(BASE_API) private url: string) {}
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (!request.url.startsWith('.')) {
      request = request.clone({ url: `${this.url}${request.url}` });
    }
    return next.handle(request);
  }
}
