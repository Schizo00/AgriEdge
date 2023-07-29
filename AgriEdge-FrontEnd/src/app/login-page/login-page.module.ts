import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginCardComponent } from './login-card/login-card.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { LoginService } from 'src/login-service/login.service';
import { RouterModule, Routes } from '@angular/router';



@NgModule({
  declarations: [
    LoginPageComponent,
    LoginCardComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    LoginPageComponent,
    LoginCardComponent,
    RouterModule
  ],
  providers: [
  ]
})
export class LoginPageModule { }
