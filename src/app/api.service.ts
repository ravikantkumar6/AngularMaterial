import { Injectable, NgModule } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { MemoryDataHandler } from './app.memoryhandler';
import { Country } from './model/model.country';

const baseUrl = environment.apiUrl;
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  
  constructor(private httpClient : HttpClient) { }

  public getAllCountry(){
    this.httpClient.get<Country[]>(baseUrl+"/countries").subscribe(response =>{
      console.log(response);
      response.forEach(function (countries){
        MemoryDataHandler.countryState.set(countries.id,countries);
      })
    });
  }

  public addCountry(country :Country){
    this.httpClient.post<Country[]>(baseUrl+"/countries",country).subscribe(response =>{
      console.log(response);
    });
  }

  public updateCountry(country :Country, id :number){
    this.httpClient.put<Country[]>(baseUrl+"/countries/"+id,country).subscribe(response =>{
      console.log(response);
    });
  }

}
