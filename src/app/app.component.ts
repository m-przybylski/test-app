import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'byt-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  constructor(private auth: AuthService) {}
  public get user(): string {
    return this.auth.userName;
  }
  public logout() {
    this.auth.logoutUser();
  }
}
