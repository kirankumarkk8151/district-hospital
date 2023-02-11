import { Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/compat/auth'
import { Router } from '@angular/router';
import { GoogleAuthProvider, GithubAuthProvider, FacebookAuthProvider} from '@angular/fire/auth'

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  user:any=''

  constructor(private fireauth:AngularFireAuth,private router:Router) { }
  // login method
  login(email : string, password : string) {
    this.fireauth.signInWithEmailAndPassword(email,password).then( res => {
        localStorage.setItem('token','true');
        


        if(res.user?.emailVerified == true) {
          this.router.navigate(['admin']);
          this.user=res.user;
        } else {
         alert("wrong username or password");
        }

    }, err => {
        alert(err.message);
        //this.router.navigate(['']);
    })
  }

  // register method
  register(email : string, password : string) {
    this.fireauth.createUserWithEmailAndPassword(email, password).then( res => {
      alert('Registration Successful');
      console.log(res.user)
      this.sendEmailForVarification(res.user);
      alert("email has sent to your registered email, Please vefify");
    }, err => {
      alert(err.message);
     // this.router.navigate(['']);
    })
  }

  // sign out
  logout() {
    this.fireauth.signOut().then( () => {
      localStorage.removeItem('token');
      this.router.navigate(['']);
    }, err => {
      alert(err.message);
    })
  }

  // forgot password
  forgotPassword(email : string) {
      this.fireauth.sendPasswordResetEmail(email).then(() => {
       alert("email has sent to your registered email, Please vefify");
      }, err => {
        alert('Something went wrong');
      })
  }

  // email varification
  sendEmailForVarification(user : any) {
    console.log(user);
    user.sendEmailVerification().then((res : any) => {
      //this.router.navigate(['/varify-email']);
    }, (err : any) => {
      alert('Something went wrong. Not able to send mail to your email.')
    })
  }

  //sign in with google
  googleSignIn() {
    return this.fireauth.signInWithPopup(new GoogleAuthProvider).then(res => {
this.user=res.user?.email
localStorage.setItem('user',this.user)
      this.router.navigate(['/admin']);
      localStorage.setItem('token',JSON.stringify(res.user?.uid));
      

    }, err => {
      alert(err.message);
    })
  }

}

