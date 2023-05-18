import { Pipe, PipeTransform } from '@angular/core';
import { Cast } from '../Interface/cast';

@Pipe({
  name: 'popularPeople'
})
export class PopularPeoplePipe implements PipeTransform {

  transform(value: Cast[]): Cast[] {
    
      return value.filter((e)=>{
        return e.popularity>0

      })
      
    }

    
}
