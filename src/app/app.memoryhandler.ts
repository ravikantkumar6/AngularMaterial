import { Injectable } from '@angular/core';

@Injectable()
export class MemoryDataHandler{
    static countryState : Map<string,string[]> = new Map();
}