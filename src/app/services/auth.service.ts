import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private router: Router) {}
  private _isAuthenticated = false;
  private _userName: string;
  public get userName(): string {
    return this._userName;
  }
  public get isAuth(): boolean {
    return this._isAuthenticated;
  }
  public loginUser(userName) {
    this._isAuthenticated = true;
    this._userName = userName;
  }
  public logoutUser() {
    this._isAuthenticated = false;
    this._userName = null;
    this.router.navigate(['/login']);
  }
}
