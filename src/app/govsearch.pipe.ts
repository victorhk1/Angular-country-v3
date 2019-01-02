import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'govsearch',
  pure: false
})

  export class GovsearchPipe implements PipeTransform {
  transform(Country: any[], searchTextGov: string): any[] {
    if(!Country) return [];
    if(!searchTextGov) return Country;
    if(Country && Country.length > 0){
searchTextGov = searchTextGov.toLowerCase();
return Country.filter( it => {
  return it.GovernmentForm.toString().toLowerCase().includes(searchTextGov);
  
});
}
}
}