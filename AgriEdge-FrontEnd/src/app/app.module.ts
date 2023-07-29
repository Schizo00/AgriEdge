
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginCardComponent } from './login-page/login-card/login-card.component';
import { LoginPageModule } from './login-page/login-page.module';
import { LoginPageComponent } from './login-page/login-page/login-page.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { FeaturesComponent } from './features/features/features.component';
import { AngularFireModule } from '@angular/fire/compat'
import { LoginService } from 'src/login-service/login.service';
import { NgModel } from '@angular/forms';
import { RegisterCardComponent } from './register-page/register-card/register-card.component';
import { RegisterPageComponent } from './register-page/register-page/register-page.component';
import { RegisterPageModule } from './register-page/register-page.module';





@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginPageModule,
    DashboardModule,
    FormsModule,
    ReactiveFormsModule,
    RegisterPageModule

    // AngularFireModule.initializeApp({
    //   apiKey: "AIzaSyACg7LSRIQEn8y5cSLeO_kkbVVXtRw75sI",
    //   authDomain: "airy-charge-384205.firebaseapp.com",
    //   projectId: "airy-charge-384205",
    //   storageBucket: "airy-charge-384205.appspot.com",
    //   messagingSenderId: "203993783781",
    //   appId: "1:203993783781:web:a583f122effd0ed550e30c"
    // })
  ],
  providers: [LoginService],
  bootstrap: [AppComponent],
  exports: [
  ]
})
export class AppModule { }
