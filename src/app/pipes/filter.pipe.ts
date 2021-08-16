import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, term: any): any {
    return value.filter(data=>{
      
      return data.name.indexOf(term) > -1
    });
  }

}
