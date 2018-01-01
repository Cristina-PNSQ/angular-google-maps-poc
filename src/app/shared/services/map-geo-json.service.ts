import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Injectable()
export class MapGeoJsonService{

  constructor() { }

  geoJsonObject: Object = {
    "type": "FeatureCollection",
    "features": [
      {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [  
            151.2055194,
            -33.8379982
          ]
        },
        "properties": {          
          "id":"1",
          "icon":{
            url: 'http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=F|ADDE63',
            },
            "description":"description Marian"
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [  
            151.206498,
            -33.8227708
          ]
        },
        "properties": {          
          "id":"2",
          "label": "L",
          "description":"description Pierdut "
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [  
            151.1768691,
            -33.8278162
          ]
        },
        "properties": {          
          "id":"3",
          "label": "L",
          "description":"description 3"
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [  
            151.2095243,
            -33.8111782
          ]
        },
        "properties": {          
          "id":"4",
          "icon":{
            "url": 'http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=F|ADDE63'
            },
            "description":"description Gasit"
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [  
            151.2112436,
            -33.8003322
          ]
        },
        "properties": {          
          "id":"4",
          "icon":{
            "url": 'http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=F|ADDE63'
            },
            "description":"description Onicaaaaaaa"
        }
      }
    ]
  };

  getGeoJson():Observable<Object>{
    return of(this.geoJsonObject);
  }
}
