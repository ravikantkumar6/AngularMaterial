import { Component } from '@angular/core';
import { MemoryDataHandler } from './app.memoryhandler';
import { ApiService } from './api.service';
import { Country, State } from './model/model.country';
import { state } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[MemoryDataHandler]
})
export class AppComponent {
  name = '';
  title ='First Page';
  price = 9.10;
  countries :Country[] = []; 
  states :State[] = []; 
  allowSelectingState = true;
  selectedcountry : number;
  countryName ='';
  stateName ='';
  public country : Country;
  public state: State = new State();
  constructor(private memoryDataHandler : MemoryDataHandler,
    private api : ApiService) {
    this.api.getAllCountry();
    this.countries = Array.from(MemoryDataHandler.countryState.values());
  }
  onChangeCountry(event : any){
    this.allowSelectingState = false;
    this.api.getAllCountry();
    this.countries = Array.from(MemoryDataHandler.countryState.values());
    this.states = MemoryDataHandler.countryState.get(this.selectedcountry).states;
  }

  onAddCountry(event : any){
    this.country = new Country();    
    this.country.id = (MemoryDataHandler.countryState.size +1);
    this.country.country = this.countryName;
    this.country.states = [];
    this.api.addCountry(this.country);
    MemoryDataHandler.countryState.set(this.country.id,this.country);
    this.countries = Array.from(MemoryDataHandler.countryState.values());
    this.countryName = '';
  }
  onAddState(event : any){
    this.country = MemoryDataHandler.countryState.get(this.selectedcountry);
    this.state.id = this.country.states.length + 1;
    this.state.state = this.stateName;
    this.country.states.push(this.state);
    this.api.updateCountry(this.country,this.selectedcountry);
    MemoryDataHandler.countryState.set(this.selectedcountry, this.country);
    this.stateName = '';
    this.selectedcountry = 0;

  }
}
