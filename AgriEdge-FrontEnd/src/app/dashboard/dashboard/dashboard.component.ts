import { Component } from '@angular/core';
import { LoginService } from 'src/login-service/login.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  constructor(private service: LoginService) {}


  ngOnInit() {
    console.log(this.service.authStateLogged())
    console.log("Inside Dashboard")
  }

}
