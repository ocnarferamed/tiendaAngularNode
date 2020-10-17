import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  OnCart : any =[];
  cartChip : any;
  
  constructor() { }
}
