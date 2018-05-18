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
    this.user
      .userExists(userName)
      .then(() => {
        return this.router.navigate(['/login', userName]);
      })
      .catch(() => {
        this.invalidUser = true;
      });
  }
}
