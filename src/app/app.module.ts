import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginScreenComponent } from './pages/login-screen/login-screen.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { Route, RouterModule } from '@angular/router';

const ROUTES: Route[] = [
  {
    path: '',
    component: LoginScreenComponent,
  },
];
@NgModule({
  declarations: [AppComponent, LoginScreenComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatIconModule,
    NoopAnimationsModule,
    FormsModule,
    RouterModule,
    RouterModule.forRoot(ROUTES),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
