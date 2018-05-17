import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'byt-password',
  templateUrl: './password.component.html',
  styles: []
})
export class PasswordComponent {
  public invalidPassword = false;
  private userName: string;
  constructor(
    private router: Router,
    private user: UserService,
    private auth: AuthService,
    activatedRoute: ActivatedRoute
  ) {
    this.userName = activatedRoute.snapshot.paramMap.get('userName');
  }

  login(password: string) {
    if (
      typeof this.user.users.find(
        user => user.user === this.userName && user.password === password
      ) === 'undefined'
    ) {
      this.invalidPassword = true;
      return;
    }
    this.auth.isAuth = true;
    this.router.navigate(['/']);
  }
}
