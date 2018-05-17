import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'byt-login',
  templateUrl: './login.component.html',
  styles: []
})
export class LoginComponent {
  public invalidUser = false;
  constructor(private router: Router, private user: UserService) {}
  public tryLogin(userName: string) {
    const userFound = this.user.users.find(user => user.user === userName);
    if (typeof userFound !== 'undefined') {
      return this.router.navigate(['/login', userName]);
    }
    this.invalidUser = true;
  }
}
