import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/login-service/login.service';

@Component({
  selector: 'app-login-card',
  templateUrl: './login-card.component.html',
  styleUrls: ['./login-card.component.css']
  
})


export class LoginCardComponent {

  @ViewChild("emailInput") email!: ElementRef;
  @ViewChild("passInput") password!: ElementRef;

  invalidCreds = false;
  @Output() register = new EventEmitter<boolean>();
  @Output() isLogged = new EventEmitter<boolean>();

  constructor(private service: LoginService, private router:Router){}

  async loginButtonAction() {
    if (this.email.nativeElement.value == "") {
      alert("Email Cannot Be Empty")
    }

    if (this.password.nativeElement.value == "") {
      alert("Password Cannot Be Empty")

    }

    if (this.email.nativeElement.value != "" && this.password.nativeElement.value != ""){
    
      try {
        const userCreds = await this.service.signIn(this.email.nativeElement.value, this.password.nativeElement.value)
        this.isLogged.emit(true)
        window.location.reload()
      } catch(error) {
        this.invalidCreds = true
        alert("Invalid Credentials")
      }
    }

    
}

resetInvalid(inputField:string) {
  this.invalidCreds = false;
  if (inputField == "email") {
    this.email.nativeElement.placeholder = "Email"
  }
  
  if (inputField == "password") {
    this.password.nativeElement.placeholder = "Password"
  }
}

registerRedirect() {
  this.router.navigate(["/register"])
}
}
