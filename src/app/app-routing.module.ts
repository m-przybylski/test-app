import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';
import { SearchComponent } from './UI/search/search.component';
import { PlayerComponent } from './UI/player/player.component';
import { LoginComponent } from './UI/login/login.component';
import { PasswordComponent } from './UI/password/password.component';
import { AuthService } from './services/auth.service';
import { UserService } from './services/user.service';

const routes: Routes = [
  {
    path: '',
    component: SearchComponent,
    canActivate: ['canActivateUser'],
    pathMatch: 'full'
  },
  { path: 'login', component: LoginComponent, canActivate: [UserService] },
  {
    path: 'login/:userName',
    component: PasswordComponent,
    canActivate: [UserService]
  },
  {
    path: ':videoId',
    component: PlayerComponent,
    canActivate: ['canActivateUser']
  }
];

const redirecter = (auth: AuthService, router: Router) => () => {
  if (auth.isAuth) {
    return auth.isAuth;
  } else {
    router.navigate(['/login']);
  }
};

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  providers: [
    {
      provide: 'canActivateUser',
      useFactory: redirecter,
      deps: [AuthService, Router]
    }
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
