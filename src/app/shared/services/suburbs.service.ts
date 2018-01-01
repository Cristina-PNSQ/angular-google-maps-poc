import { Injectable } from '@angular/core';
import {Suburb} from '../models/suburb'

@Injectable()
export class SuburbsService {

   suburbs: Suburb[];

  constructor() {
    this.suburbs = [
        {name :"North Sydney",state:"NSW",postalCode:"2060",latitude : -33.8379982,longitude : 151.2055194, isGeolocation: false},
        {name :"Cammeray", state:"NSW",postalCode:"2062",latitude : -33.8227708,longitude : 151.206498, isGeolocation: false},
        {name :"Crows Nest", state:"NSW",postalCode:"2065",latitude : -33.8278162,longitude : 151.1768691, isGeolocation: false},
        {name :"Northbridgw", state:"NSW",postalCode:"2063",latitude : -33.8111782,longitude : 151.2095243, isGeolocation: false},
    ];
   }

  getSuburbs(){
    return this.suburbs;
  }
}
