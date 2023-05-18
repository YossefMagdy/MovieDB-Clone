import { AuthServiceService } from 'src/app/Core/service/auth-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
name:string=''
  constructor(private AuthServiceService:AuthServiceService){

  }
  ngOnInit(): void {
    this.AuthServiceService.UserSignIn.subscribe({
      next:(r)=>{
        if(this.AuthServiceService.UserSignIn.getValue()!=null){
          this.name=this.AuthServiceService.userName
        }
        else{
          this.name=''
        }
      }
    })
  }
}
