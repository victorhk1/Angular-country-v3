import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { AppService } from '../app.service';
import { Country, City, CountryLanguage } from '../world'
import { all } from 'q';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit {
  country: Country;
  cities: City[];
  language: CountryLanguage[];

  constructor(
    private route: ActivatedRoute,
    private service: AppService,
    private router: Router
  ) { }


  ngOnInit() { 
    let countryCode = this.route.snapshot.paramMap.get('code');
    this.service.getData().subscribe((world: any) => {
      console.log(world)

      this.country = world.Country.filter((country: Country) => country.Code == countryCode)[0];
      this.cities = world.City.filter((cities: City) => cities.CountryCode == countryCode);
      this.language = world.CountryLanguage.filter((language: City) => language.CountryCode == countryCode);
    });
    

      
   
  }
  
  goBack() {
    this.router.navigate(['/list']);
  }
}
