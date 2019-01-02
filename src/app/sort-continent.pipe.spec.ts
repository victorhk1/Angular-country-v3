import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortContinent'
})
export class SortContinentPipe implements PipeTransform {

  transform(Country: any[], sortContinentSearch: string): any {
    if(!sortContinentSearch) {
      return Country;
    }
    return Country
    .filter(Country=> !sortContinentSearch ? true : Country.Continent.includes(sortContinentSearch))
    
  }
}