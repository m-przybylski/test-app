import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './UI/search/search.component';
import { PlayerComponent } from './UI/player/player.component';
import { LoginComponent } from './UI/login/login.component';
import { PasswordComponent } from './UI/password/password.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { UrlInterceptor } from './services/interceprots/url-interceptor';
import { ApiKeyInterceptor } from './services/interceprots/api-key-interceptor';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    PlayerComponent,
    LoginComponent,
    PasswordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: UrlInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ApiKeyInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
