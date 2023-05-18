import { AuthServiceService } from './../../../../Core/service/auth-service.service';
import { Component, OnInit } from '@angular/core';
import {  Validators, FormBuilder } from '@angular/forms'


import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  login:boolean=false
  Error:string=''
  Showpass:boolean=false
  ShowRepass:boolean=false


  constructor(
   
    private AuthServiceService:AuthServiceService,
    private _Router:Router,
    private _fb:FormBuilder

  ){}



  RegisterForm=this._fb.group({
    name:['',[Validators.required,Validators.minLength(3)]],
    email:['',[Validators.required,Validators.email]],
    password:['',[Validators.required,Validators.pattern(/^[a-zA-Z0-9@-_$%#@!*.]{8,15}$/)]],
    rePassword:['',[Validators.required,Validators.required,Validators.pattern(/^[a-zA-Z0-9@-_$%#@!*.]{8,15}$/)]],
    phone:['01000000000',[Validators.required,Validators.pattern(/^(011|012|015|010)[0-9]{8}$/)]],
  },{Validators:this.passwordMatch})
  passwordMatch():any{
    let password=this.RegisterForm.get('password')
    let repassword=this.RegisterForm.get('rePassword')
    if(password?.value==repassword?.value){
      return ''
    }else{
      repassword?.setErrors({passwordMatc:'password and repassword dont match'})
      return {passwordMatc:'password and repassword dont match'}
    }
  }
  handleRegister(){
    console.log(this.RegisterForm.valid)
    if(this.RegisterForm.valid){
      this.login=true
      console.log(this.RegisterForm.value)
      this.AuthServiceService.Register(this.RegisterForm.value).subscribe({
        next:(Response)=>{
          this.login=false
          console.log(Response)
          this._Router.navigate(['/Authentication','login']) 
        },
        error:(error)=>{
           this.login=false
           console.log(error)
          this.Error=error.error.message
        }
      })
    }

  }
 
  toggleShow(){
    this.Showpass=!this.Showpass
  }
  toggleShowRe(){
    this.ShowRepass=!this.ShowRepass
  }
  
}
