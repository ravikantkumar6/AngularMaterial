
export class Country{
    id : number;
    country: string;
    states: State[] = []; 
}

export class State{
    id : number;
    state: string;
}
