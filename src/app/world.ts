export class World {
  Citys: City[];
  Countries: Country[];
  CountryLanguages: CountryLanguage[];
}

export class City {
	ID:number;
	Name:string;
	CountryCode:string;
	District:string;
	Population:number;
}

export class Country {
	Code:string;
	Name:string;
	Continent:string;
	Region:string;
	SurfaceArea:string;
	IndepYear:number;
	Population:number;
	LifeExpectancy:number;
	GNP:number;
	GNPOld:number;
	LocalName:string;
	GovernmentForm:string;
	HeadOfState:string;
	Capital:number;
	Code2:string;
}

export class CountryLanguage {
	CountryCode:string;
	Language:string;
	IsOfficial:string;
	Percentage:number;
	Population:number;
}