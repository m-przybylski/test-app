import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CanActivate, ActivatedRouteSnapshot, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService implements CanActivate {
  users: UserData[];

  constructor(private http: HttpClient, private router: Router) {}
  canActivate(route: ActivatedRouteSnapshot): Promise<boolean> {
    if (this.users && this.users.length) {
      return Promise.resolve(true);
    }
    const userName = route.paramMap.get('userName');
    return new Promise((resolve, reject) => {
      this.findByName(userName).then(userData => {
        if (!!userData) {
          resolve(true);
          return;
        }
        this.router.navigate(['/login']);
        resolve(false);
      });
    });
  }
  userExists(userName: string): Promise<boolean> {
    return new Promise((resolve, reject) => {
      this.findByName(userName).then(user => {
        if (typeof user !== 'undefined') {
          resolve(true);
          return;
        }
        reject('User Not Found');
      });
    });
  }
  isValidUser(userName: string, password: string): Promise<boolean> {
    return new Promise((resolve, reject) => {
      this.findByName(userName).then(user => {
        if (user.password === password) {
          resolve(true);
          return;
        }
        reject('Invalid password');
      });
    });
  }
  private async getUsers() {
    if (!this.users || !this.users.length) {
      this.users = await this.getUsersFromHttp();
    }
    return this.getUsersFromCache();
  }
  private getUsersFromHttp(): Promise<UserData[]> {
    return this.http.get<UserData[]>('./assets/users.json').toPromise();
  }
  private getUsersFromCache(): UserData[] {
    return this.users;
  }
  private async findByName(name: string): Promise<UserData> {
    if (!this.users || !this.users.length) {
      this.users = await this.getUsersFromHttp();
    }
    return this.findInCache(name);
  }
  private findInCache(name: string): UserData {
    return this.getUsersFromCache().find(user => user.user === name);
  }
}

interface UserData {
  user: string;
  password: string;
}
