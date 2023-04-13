import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginCardComponent } from './login-card/login-card.component';
import { LoginPageComponent } from './login-page/login-page.component';


@NgModule({
  declarations: [
    LoginPageComponent,
    LoginCardComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LoginPageComponent,
    LoginCardComponent
  ]
})
export class LoginPageModule { }
