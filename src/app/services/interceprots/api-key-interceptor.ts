import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ApiKeyInterceptor implements HttpInterceptor {
  readonly apiKey = 'AIzaSyD3A6GLD9gzwmyzcoCitdJpYGm39IFt6KY';
  constructor() {}
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    request = request.clone({ setParams: { key: this.apiKey } });
    return next.handle(request);
  }
}
