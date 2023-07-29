import { Component, SimpleChanges } from '@angular/core';
import { LoginService } from 'src/login-service/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'AgriEdge-FrontEnd';
  isLogged!: boolean;

  constructor(private loginService: LoginService) {}

  async ngOnInit() {
    console.log("Inside App Comp")
    this.isLogged = await this.loginService.authStateLogged() as boolean
    console.log("Auth State", this.isLogged)
  }


  
}
