import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './UI/search/search.component';
import { PlayerComponent } from './UI/player/player.component';
import { LoginComponent } from './UI/login/login.component';
import { PasswordComponent } from './UI/password/password.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    PlayerComponent,
    LoginComponent,
    PasswordComponent
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
