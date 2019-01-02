import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortContinent',
  pure: false
})
export class SortContinentPipe implements PipeTransform {
  transform(Country: any[], sortContinentSearch: string): any[] {
    if(!Country) return [];
    return Country.filter(Country=> !sortContinentSearch ? true : Country.Continent.includes(sortContinentSearch))
  }

}