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

suburbLocation: Suburb = null;

@ViewChild("searchLocation") searchElementRef;
@Output() selectedLocation = new EventEmitter<Suburb>();
  
  constructor( private ngZone: NgZone,
    private mapsAPILoader: MapsAPILoader) {
    }

  ngOnInit() {
  
    this.mapsAPILoader.load().then(() => {
     
      this.setCurrentPosition();

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
        this.setSuburbLocation(place.address_components,  place.geometry.location.lat(), place.geometry.location.lng(), false);
        this.selectedLocation.emit(this.suburbLocation);
      });
    });
  });
  }

  private setCurrentPosition() {

    if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition((position) => {

          let geocoder = new google.maps.Geocoder();
          let request = {
            location:  new google.maps.LatLng(position.coords.latitude, position.coords.longitude)
          };   

          geocoder.geocode(request, (results, status) => {  
                            if (status == google.maps.GeocoderStatus.OK) {
                              if (results[0] != null) {
                                let address_components = results[0].address_components;      
                                this.setSuburbLocation(address_components,  position.coords.latitude, position.coords.longitude, true);      
                                this.selectedLocation.emit(this.suburbLocation);
                                console.log('geolocation fired');
                              } else {
                                alert("No address available");
                              }
                            }
            });
        });
    }
    else {
      console.log('no geolocation')
    }
  }

  private setSuburbLocation(address_components: any, latitude: number, longitude : number, isGeolocation: boolean)
  {
    this.suburbLocation = {
                    name: address_components.find(c=>c.types[0] === "locality").long_name,
                    state: address_components.find(c=>c.types[0] === "administrative_area_level_1").short_name,
                    latitude:latitude,
                    longitude: longitude,
                    postalCode: address_components.find(c => c.types[0] === "postal_code").long_name,
                    country:address_components.find(c =>c.types[0]==="country").long_name,
                    isGeolocation: isGeolocation
                 };       
  }
}