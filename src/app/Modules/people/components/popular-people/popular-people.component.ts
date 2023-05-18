import { Component, OnInit } from '@angular/core';
import { Popular } from 'src/app/Core/Interface/PopularPeople/popular';
import { PopularPeopleService } from 'src/app/Core/service/Movie/popular-people.service';

@Component({
  selector: 'app-popular-people',
  templateUrl: './popular-people.component.html',
  styleUrls: ['./popular-people.component.scss']
})
export class PopularPeopleComponent implements OnInit{

  constructor(private _PopularPeopleService:PopularPeopleService){}
  p:number=1
  Data!:any
  IMagePath:string='https://www.themoviedb.org/t/p/w235_and_h235_face/'
  ngOnInit(): void {
   this.GetPeople()
  }
  List(event:Event){
    const E=event.target as HTMLButtonElement
    if(E.nextElementSibling?.classList.contains('d-none')==true){
      E.nextElementSibling?.classList.add('d-block')
      E.nextElementSibling?.classList.remove('d-none')
    }else{
      E.nextElementSibling?.classList.remove('d-block')
      E.nextElementSibling?.classList.add('d-none')
    }
  }
  GetPeople(){
    this._PopularPeopleService.GetPopularPeople(this.p).subscribe({
      next:(r)=>{
        this.Data=r
      }
    })
  }

  paginateon(){
    this.GetPeople()
  }
}
