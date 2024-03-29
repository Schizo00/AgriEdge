import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {
  isLogged!: boolean;
  register!: boolean;

  onEvent(bool: boolean) {
    this.isLogged = bool
    console.log("Sign In Button Triggered Alert", bool)
  }

}
