import { Injectable } from '@angular/core';
import {Suburb} from '../models/suburb'

@Injectable()
export class SuburbsService {

   suburbs: Suburb[];

  constructor() {
    this.suburbs = [
        {name :"North Sydney",state:"NSW",postalCode:"2060",lat : -33.8379982,lng : 151.2055194},
        {name :"Cammeray", state:"NSW",postalCode:"2062",lat : -33.8227708,lng : 151.206498},
        {name :"Crows Nest", state:"NSW",postalCode:"2065",lat : -33.8278162,lng : 151.1768691},
        {name :"Northbridgw", state:"NSW",postalCode:"2063",lat : -33.8111782,lng : 151.2095243},
    ];
   }

  getSuburbs(){
    return this.suburbs;
  }
}
