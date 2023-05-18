import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthenticationRoutingModule } from './authentication-routing.module';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { SharedModule } from '../shared/shared.module';
import { ForgepasswordComponent } from './components/forgepassword/forgepassword.component';
import { ChangepassComponent } from './components/changepass/changepass.component';

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    ForgepasswordComponent,
    ChangepassComponent,
    
  ],
  imports: [
    CommonModule,
    AuthenticationRoutingModule,
    SharedModule
  ]
})
export class AuthenticationModule { }
