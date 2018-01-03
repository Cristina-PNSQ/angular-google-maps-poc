import { Component, OnInit, NgZone, ViewChild, Output, EventEmitter } from '@angular/core';
import { MapsAPILoader } from '@agm/core';
import { } from 'googlemaps';

import { Suburb } from 'app/shared/models/suburb';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.css']
})
export class LocationsComponent implements OnInit {

suburbLocation: Suburb;

@ViewChild("searchLocation") searchElementRef;
@Output() selectedLocation = new EventEmitter<Suburb>();
  
  constructor( private ngZone: NgZone,
    private mapsAPILoader: MapsAPILoader) {
    }

  ngOnInit() {
    this.setCurrentPosition();

    this.mapsAPILoader.load().then(() => {
      let autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement, {
        types: ['(cities)'],
        componentRestrictions: {'country': 'au'},
      });

    autocomplete.addListener("place_changed", () => {
      this.ngZone.run(() => {
        //get the place result
        let place: google.maps.places.PlaceResult = autocomplete.getPlace();

        //verify result
        if (place.geometry === undefined || place.geometry === null) {
          return;
        }

        //set latitude, longitude and zoom
        this.suburbLocation = {
          latitude : place.geometry.location.lat(),
          longitude : place.geometry.location.lng(),
          name: place.address_components.find(c=>c.types[0] === "locality").long_name,
          state: place.address_components.find(c=>c.types[0] === "administrative_area_level_1").short_name,
          postalCode: place.address_components.find(c => c.types[0] === "postal_code").long_name,
          country: place.address_components.find(c =>c.types[0]==="country").long_name,
          isGeolocation:false
      }
       this.selectedLocation.emit(this.suburbLocation);
      });
    });
  });
  }

  private setCurrentPosition() {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {

        this.suburbLocation = {name:'geolocation', 
                              state:'geolocation',
                              latitude: position.coords.latitude, 
                              longitude: position.coords.longitude,
                              postalCode:'geolocation',
                              country:'Australia',
                              isGeolocation: true}; 

      this.selectedLocation.emit(this.suburbLocation);
      });
    }
    //this.onSelected.emit(this.selectedSuburb);
  }
}