import { Component, OnInit, NgZone, ViewChild } from '@angular/core';
import { MapsAPILoader } from '@agm/core';

import { Suburb } from 'app/shared/models/suburb';
import { MapGeoJsonService } from 'app/shared/services/map-geo-json.service';

@Component({
  selector: 'app-map-locations',
  templateUrl: './map-locations.component.html',
  styleUrls: ['./map-locations.component.css']
})
export class MapLocationsComponent implements OnInit {

  zoom: number = 14;
  selectedSuburb : Suburb = null;
  geoJsonObject: Object;

  infoWindowLat:number;
  infoWindowLong:number;
  infoWindowIsOpen:boolean=false;
  infoWindowText:string;

  @ViewChild("gm") map;

  constructor( private geoJsonService: MapGeoJsonService,
    private ngZone: NgZone,
    private mapsAPILoader: MapsAPILoader) { }

  ngOnInit() {
    this.geoJsonService.getGeoJson().subscribe(geoJson => this.geoJsonObject = geoJson);

     setTimeout(()=>{
      if(this.selectedSuburb === null)
    {
      this.selectedSuburb = {
                            name:'generic', 
                            state:'NSW',
                            latitude: -31.253218, 
                            longitude: 146.921099,
                            postalCode:'geolocation',
                            country:'Australia',
                            isGeolocation: true
                          }; 
      console.log('timeout fired');
      this.zoom = 6;
    }}, 0);
  }

  styleFunc(feature) {
    return ({
      clickable: true,
      label: feature.getProperty('label'),
      glyph: feature.getProperty('id') ,
      icon: feature.getProperty('icon')
   });
  }

  markerClick(clickEvent, infoWindow) {
    this.infoWindowText = clickEvent.feature.getProperty('description');
    var position = clickEvent.feature.getGeometry();
    this.infoWindowLat=position.b.lat();
    this.infoWindowLong=position.b.lng();
    this.infoWindowIsOpen=true;
    infoWindow.open();
    this.map.lastOpen=infoWindow;
 }

  onSelectedLocation(suburb){
    this.selectedSuburb = suburb;
    this.zoom = 14;

    if(this.map!=null && this.map.lastOpen != null) 
    {
      this.map.lastOpen.close();
    }
  }
}
