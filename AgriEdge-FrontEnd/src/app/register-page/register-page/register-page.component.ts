import { Component } from '@angular/core';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent {
  isLogged!: boolean;
  register!: boolean;

  onEvent(bool: boolean) {
    this.isLogged = bool
    console.log("Sign In Button Triggered Alert", bool)
  }

}
