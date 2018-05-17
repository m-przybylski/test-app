import { environment } from '../environments/environment';
import { InjectionToken } from '@angular/core';

const apiUrlResolver = () => () => environment.apiUrl;

export const BASE_API = new InjectionToken('InjectionToken', {
  providedIn: 'root',
  factory: apiUrlResolver()
});
