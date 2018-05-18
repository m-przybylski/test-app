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
    this.user
      .isValidUser(this.userName, password)
      .then(() => {
        this.auth.loginUser(this.userName);
        this.router.navigate(['/']);
      })
      .catch(() => {
        this.invalidPassword = true;
      });
  }
}
