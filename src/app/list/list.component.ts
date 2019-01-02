import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';

import { AppService } from '../app.service'; 
import { City, Country } from '../world';

@Component({
  selector: 'list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})

//exportering av klasser
export class ListComponent {
  public Countries: Country[];
	public CountriesDisplay: Country[];
	public Countrizz: Country [];
	public Cities: City[];
	public sortContinentSearch: any;
	public searchText = "";
	public searchTextGov = "";
	public searchValue = "";
	public larger = "";
	public smaller = "";



	
  constructor(
    private appService: AppService
  ) { }
	
//Ascending och descending rangordning, notera: tog hjalp av stackoverflow fragor
isAscendic = true
	send(){
    console.log("click")
    this.isAscendic?this.ascendic():this.descendic()
    
	}
	
 
	


	

 ascendic(){
   this.isAscendic = false;
    console.log("ascending")
		this.CountriesDisplay = this.CountriesDisplay.sort((n1,n2) => {
	 if (n1.Name < n2.Name) {
			 return -1;
	 }
	 else if (n1.Name > n2.Name) {
			 return 1;
	 }

	 return 0;
});
 }

 descendic(){
   this.isAscendic = true
  console.log("descending")
 	 this.CountriesDisplay = this.CountriesDisplay.sort((n1,n2) => {
	 if (n1.Name < n2.Name) {
			 return 1;
	 }
	 else if (n1.Name > n2.Name) {
			 return -1;
	 }
	 return 0;
});
 }

 isAscendic1 = true
 send1(){
	this.isAscendic1?this.ascendic1():this.descendic1()
}
ascendic1(){
	this.isAscendic1 = false;
	console.log("ascending")
	this.CountriesDisplay = this.CountriesDisplay.sort((n1,n2) => {
 if (n1.GovernmentForm < n2.GovernmentForm) {
		 return -1;
 }
 else if (n1.GovernmentForm > n2.GovernmentForm) {
		 return 1;
 }

 return 0;
});
}

descendic1(){
  this.isAscendic1 = true
  console.log("descending")
 	 this.CountriesDisplay = this.CountriesDisplay.sort((n1,n2) => {
	 if (n1.GovernmentForm < n2.GovernmentForm) {
			 return 1;
	 }
	 else if (n1.GovernmentForm > n2.GovernmentForm) {
			 return -1;
	 }
	 return 0;
});
 }

isAscendic2 = true
 send2(){
	this.isAscendic2?this.ascendic2():this.descendic2()
}
ascendic2(){
	this.isAscendic2 = false;
	console.log("ascending")
	this.CountriesDisplay = this.CountriesDisplay.sort((n1,n2) => {
 if (n1.HeadOfState < n2.HeadOfState) {
		 return -1;
 }
 else if (n1.HeadOfState > n2.HeadOfState) {
		 return 1;
 }

 return 0;
});
}

descendic2(){
  this.isAscendic2 = true
  console.log("descending")
 	 this.CountriesDisplay = this.CountriesDisplay.sort((n1,n2) => {
	 if (n1.HeadOfState < n2.HeadOfState) {
			 return 1;
	 }
	 else if (n1.HeadOfState > n2.HeadOfState) {
			 return -1;
	 }
	 return 0;
});
 }


isAscendic3 = true
send3(){
this.isAscendic3?this.ascendic3():this.descendic3()

}

ascendic3(){
 this.isAscendic3 = false;
 this.CountriesDisplay = this.CountriesDisplay.sort((a, b) => +a - +b);
	this.CountriesDisplay = this.CountriesDisplay.sort((a1,a2) => {
 if (+a1.Population < +a2.Population) {
		 return 1;
 }
 if (+a1.Population > +a2.Population) {
		 return -1;
 }
 return 0;
});
}

descendic3(){
 this.isAscendic3 = true
 this.CountriesDisplay = this.CountriesDisplay.sort((a, b) => +b - +a);
this.CountriesDisplay = this.CountriesDisplay.sort((a1,a2) => {
 if (+a1.Population > +a2.Population) {
		 return 1;
 }
 if (+a1.Population < +a2.Population) {
		 return -1;
 }
 return 0;
});
}

isAscendic4 = true
send4(){
	this.isAscendic4?this.ascendic4():this.descendic4()

}

ascendic4(){
 this.isAscendic4 = false;
 this.CountriesDisplay = this.CountriesDisplay.sort((a, b) => +a - +b);
	this.CountriesDisplay = this.CountriesDisplay.sort((a1,a2) => {
 if (+a1.LifeExpectancy < +a2.LifeExpectancy) {
		 return 1;
 }
 if (+a1.LifeExpectancy > +a2.LifeExpectancy) {
		 return -1;
 }
 return 0;
});
}

descendic4(){
 this.isAscendic4 = true
 this.CountriesDisplay = this.CountriesDisplay.sort((a, b) => +b - +a);
this.CountriesDisplay = this.CountriesDisplay.sort((a1,a2) => {
 if (+a1.LifeExpectancy > +a2.LifeExpectancy) {
		 return 1;
 }
 if (+a1.LifeExpectancy < +a2.LifeExpectancy) {
		 return -1;
 }
 return 0;
});
} //H‰r slutar rangordningen

search() {
  this.CountriesDisplay = this.Countries.filter((country: Country) => {
    return country.Name.toString().toLowerCase().startsWith(this.searchText.toLowerCase());
  });
  console.log(this.CountriesDisplay.length);
}

searchGov() {
  this.Countrizz = this.Countries.filter((country: Country) => {
    return country.GovernmentForm.toString().toLowerCase().startsWith(this.searchTextGov.toLowerCase());
  });
  console.log(this.CountriesDisplay.length);
}
// rensar sokningar
clearsearch() {
	this.searchText = "";
	this.searchTextGov = "";
	this.searchValue = "";
	this.sortContinentSearch = "Europe";
	this.CountriesDisplay = this.Countries;


}
//sokmin varde
searchMin() {
  this.CountriesDisplay = this.Countries.filter((country: Country) => {
    return country.Population >= parseInt(this.searchValue);
  });	
}
//sok max varde
searchMax() {
  this.CountriesDisplay = this.Countries.filter((country: Country) => {
    return country.Population <= parseInt(this.searchValue);
  });	
}
	//ngoninit 
  ngOnInit() {
    this.appService.getData().subscribe(world => {
      console.log(world.Country.length)
      this.Countries = world.Country.sort();
      this.CountriesDisplay = this.Countries;
			this.Cities = world.City;
			this.sortContinentSearch="Europe";
    })
  }
}