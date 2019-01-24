import { Injectable } from '@angular/core';
import { Country, State } from './model/model.country';

@Injectable()
export class MemoryDataHandler{
    static countryState : Map<number,Country> = new Map();
}