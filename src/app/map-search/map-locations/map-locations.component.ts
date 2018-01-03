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
  selectedSuburb : Suburb;
  geoJsonObject: Object;

  @ViewChild("gm") map;

  constructor( private geoJsonService: MapGeoJsonService,
    private ngZone: NgZone,
    private mapsAPILoader: MapsAPILoader) { }

  ngOnInit() {
    this.geoJsonService.getGeoJson().subscribe(geoJson => this.geoJsonObject = geoJson);
  }

  styleFunc(feature) {
    return ({
      clickable: true,
      //label: feature.getProperty('label'),
      glyph: feature.getProperty('id') ,
      icon: feature.getProperty('icon')
   });
  }

  onSelectedLocation(suburb){
    this.selectedSuburb = suburb;
    
    if(this.map!=null && this.map.lastOpen != null) 
    {
      this.map.lastOpen.close();
    }
  }
}
