import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortpop',
  pure:false
})
export class SortpopPipe implements PipeTransform {

  transform(Country: any[], sortMinPopulationsearch: any): any[] {
    if(!Country) return [];
    if(!sortMinPopulationsearch) return Country;
    if(Country && Country.length > 0){
      sortMinPopulationsearch = sortMinPopulationsearch.toLowerCase();
return Country.filter( it => {
  return it.Population.toString().toLowerCase().includes(sortMinPopulationsearch);
  
});
}
}
}
