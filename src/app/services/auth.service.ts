import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _isAuthenticated = false;
  public get isAuth(): boolean {
    return this._isAuthenticated;
  }
  public set isAuth(v: boolean) {
    this._isAuthenticated = v;
  }
}
