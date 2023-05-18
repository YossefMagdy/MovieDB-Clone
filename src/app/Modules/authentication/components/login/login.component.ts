import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/Core/service/auth-service.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  login:boolean=false
  Error:string=''
  Showpass:boolean=false
  ShowRepass:boolean=false
  Human:boolean=false

  constructor(
    private _fb:FormBuilder,
    private AuthServiceService:AuthServiceService,
    private _Router:Router
  ){}


  LoginForm=this._fb.group({
    email:['',[Validators.required,Validators.email]],
    password:['',[Validators.required,Validators.pattern(/^[a-zA-Z0-9@-_$%#@!*.]{8,15}$/)]]
  })

  handleLogin(){
    if(this.LoginForm.valid){
      
      this.login=true
      this.AuthServiceService.login(this.LoginForm.value).subscribe({
        next:(Response)=>{
          if(Response.message=="success"){
            this.login=false
            localStorage.setItem('userToken',Response.token)
            this.AuthServiceService.decode()
            this._Router.navigate(['/home'])
          }
        },
        error:(error)=>{

          this.login=false
          this.Error=error.error.message
        }
      })
    }

  }
  toggleShow(){
    this.Showpass=!this.Showpass
  }
  resolved(captchaResponse: string) {
    if (captchaResponse.length > 0) {
      this.Human = true
    }
    else {
      this.Human = false
    }

  }
}
