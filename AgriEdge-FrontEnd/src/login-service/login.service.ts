import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { initializeApp } from 'firebase/app';
// import { AngularFireAuth } from '@angular/fire/compat/auth/'
import { getAuth, setPersistence, signInWithRedirect, inMemoryPersistence, GoogleAuthProvider, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, onAuthStateChanged, AuthErrorCodes, sendEmailVerification } from "firebase/auth";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  isLogged = false;

  // constructor(public firebaseAuth: AngularFireAuth) { }
  constructor(private router: Router){}

  app = initializeApp({
    apiKey: "AIzaSyAT5Zp5018738QZsRt5zoCaAc1tUGmMIbg",
  authDomain: "shining-rush-392311.firebaseapp.com",
  projectId: "shining-rush-392311",
  storageBucket: "shining-rush-392311.appspot.com",
  messagingSenderId: "990761999638",
  appId: "1:990761999638:web:7f4134c2c8db1a6eba8437",
  measurementId: "G-L5NL66K42Z"

  })

  auth = getAuth(this.app);


  async signIn(email:string, password:string) {
    await signInWithEmailAndPassword(this.auth, email, password)
    .then(res => {
      if (res.user.emailVerified == true) {
        this.isLogged = true
        localStorage.setItem('user', JSON.stringify(res.user))
        console.log(res.user?.email)
      } else {
        alert("Please verify your email")
      }
      
    })
  }

  async signUp(email:string, password:string) {
    await createUserWithEmailAndPassword(this.auth, email, password)
    .then(res => {
      this.isLogged = true
      // localStorage.setItem('user', JSON.stringify(res.user))
      this.router.navigate(['/login'])
      sendEmailVerification(res.user)
    })
    


    // const user = firebase.auth().currentUser;

    // await user?.sendEmailVerification()
  }

  logout() {
    signOut(this.auth)
    localStorage.removeItem('user')
  }

  authStateLogged = async () => {
    return new Promise((resolve, reject) => {
      var isLoggedIn:boolean = false;
      onAuthStateChanged(this.auth, (user) => {
        if (user) {
          if (user.emailVerified == true) {
            const uid = user.uid
            console.log("Cookie Set")
            isLoggedIn = true
            console.log("From the function", isLoggedIn)
            if (window.location.pathname == "/login") {
              // alert("Logged in redir")
              this.router.navigate(['/features'])
            }
          } else {
            this.logout()
          }
          
        }else if (window.location.pathname == "/register"){
          console.log(window.location.pathname)
        } else {
          console.log("UserNotLoggedIn")
          this.router.navigate(['/login'])
          isLoggedIn = false
        }
        resolve(isLoggedIn);
      })
    })
  }



  
}
