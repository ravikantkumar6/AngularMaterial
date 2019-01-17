import { Component } from '@angular/core';
import { MemoryDataHandler } from './app.memoryhandler';
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
  countries :string[] = []; 
  states :string[] = []; 
  allowSelectingState = true;
  selectedcountry ='';
  countryName ='';
  stateName ='';
  constructor(private memoryDataHandler : MemoryDataHandler) {
    this.countries = Array.from(MemoryDataHandler.countryState.keys());
  }
  onChangeCountry(event : any){
    this.allowSelectingState = false;
    this.countries = Array.from(MemoryDataHandler.countryState.keys());
    this.states = Array.from(MemoryDataHandler.countryState.get(this.selectedcountry))
  }
  onAddCountry(event : any){
    MemoryDataHandler.countryState.set(this.countryName,[]);
    this.countries = Array.from(MemoryDataHandler.countryState.keys());
    this.countryName = '';
  }
  onAddState(event : any){
    this.states =  Array.from(MemoryDataHandler.countryState.get(this.selectedcountry));
    this.states.push(this.stateName);
    MemoryDataHandler.countryState.set(this.selectedcountry,this.states);
    this.stateName = '';
  }
}
