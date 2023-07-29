import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/login-service/login.service';

@Component({
  selector: 'app-register-card',
  templateUrl: './register-card.component.html',
  styleUrls: ['./register-card.component.css']
})
export class RegisterCardComponent {

  @ViewChild("emailInput") email!: ElementRef;
  @ViewChild("passInput") password!: ElementRef;
  @ViewChild("passInput2") password2!: ElementRef;

  invalidCreds = false;
  @Output() register = new EventEmitter<boolean>();
  @Output() isLogged = new EventEmitter<boolean>();

  constructor(private service: LoginService, private router:Router){}

  async registerButtonAction() {
    if (this.email.nativeElement.value == "") {
      alert("Email Cannot Be Empty")
    }

    if (this.password.nativeElement.value == "") {
      alert("Password Cannot Be Empty")

    }

    if (this.password2.nativeElement.value == "") {
      alert("Repeat Password Cannot Be Empty")

    }

    if (this.password2.nativeElement.value != this.password.nativeElement.value) {
      alert("Passwords Dont Match")

    }

    if (this.email.nativeElement.value != "" && this.password.nativeElement.value != ""){
    
      try {
        const userCreds = await this.service.signUp(this.email.nativeElement.value, this.password.nativeElement.value)
        alert("Sign Up Successful!")
        this.isLogged.emit(true)
      } catch(error) {
        this.invalidCreds = true
        console.log(this.invalidCreds)
        // alert("Invalid Credentials")
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

  if (inputField == "password2") {
    this.password.nativeElement.placeholder = "Password"
    this.password2.nativeElement.placeholder = "Repeat Password"

  }


}

loginRedirect() {
  this.router.navigate(["/login"])
}


}
