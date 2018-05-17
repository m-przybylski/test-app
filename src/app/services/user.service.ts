import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CanActivate, ActivatedRouteSnapshot, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { tap, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService implements CanActivate {
  users: UserData[];

  constructor(private http: HttpClient, private router: Router) {}
  canActivate(route: ActivatedRouteSnapshot): Observable<boolean> {
    if (this.users && this.users.length) {
      return of(true);
    }
    const userName = route.paramMap.get('userName');
    return this.http.get<UserData[]>('./assets/users.json').pipe(
      tap(data => {
        this.users = data;
        if (
          typeof this.users.find(user => user.user === userName) === 'undefined'
        ) {
          this.router.navigate(['/login']);
        }
      }),
      switchMap(() => of(true))
    );
  }
}

interface UserData {
  user: string;
  password: string;
}
