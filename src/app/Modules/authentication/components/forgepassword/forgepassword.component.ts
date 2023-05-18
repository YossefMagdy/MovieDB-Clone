import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/Core/service/auth-service.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-forgepassword',
  templateUrl: './forgepassword.component.html',
  styleUrls: ['./forgepassword.component.scss']
})
export class ForgepasswordComponent {
  login: boolean = false
  Error: string = ''
  Human: boolean = false
  resetcode: boolean = false
  constructor(
    private _fb: FormBuilder,
    private AuthServiceService: AuthServiceService,
    private _Router: Router,

  ) {

  }



  ForgetForm = this._fb.group({
    email: ['', [Validators.required, Validators.email]],
  })
  Resetform = this._fb.group({
    resetCode: ['', [Validators.required]],
  })

  Forget() {
   
    if (this.ForgetForm.valid) {
      this.login = true
      console.log('hello')
      this.AuthServiceService.ResetPassword(this.ForgetForm.value).subscribe({
        next: (Response) => {
          console.log(Response)
          localStorage.setItem('userEmail',JSON.stringify(this.ForgetForm.value.email))
          Swal.fire(Response.message);
          this.resetcode = true
          this.login = false
        },
        error: (error) => {
          console.log(error)
          this.login = false
          this.Error = error.error.message
        }
      })
    }

  }


  
  Reset() {

    if (this.Resetform.valid) {
      this.login = true
      this.AuthServiceService.ResetCode(this.Resetform.value).subscribe({
        next: (Response) => {
          Swal.fire({
            icon: 'success',
            title: Response.status
          });

          this.login = false
          this._Router.navigate(['/Authentication','changepass'])

        },
        error: (error) => {


          this.login = false
          this.Error = error.error.message
        }
      })
    }

  }

}
