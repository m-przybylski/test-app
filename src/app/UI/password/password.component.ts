import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'byt-password',
  templateUrl: './password.component.html',
  styles: []
})
export class PasswordComponent {
  constructor(private router: Router, private auth: AuthService) {}

  login(password: string) {
    this.auth.isAuth = true;
    this.router.navigate(['/']);
  }
}
