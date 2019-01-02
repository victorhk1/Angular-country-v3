import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'countrysearch',
  pure:false
})


export class CountrysearchPipe implements PipeTransform {

  transform(Country: any[], searchText: string): any[] {
    if(!Country) return [];
    if(!searchText) return Country;
    if(Country && Country.length > 0){
searchText = searchText.toLowerCase();
return Country.filter( it => {
  return it.Name.toString().toLowerCase().includes(searchText);
  
});
}
}
}

