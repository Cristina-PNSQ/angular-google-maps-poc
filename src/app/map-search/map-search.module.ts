import { NgModule , Injectable} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AgmCoreModule , AgmDataLayer} from '@agm/core';
import { AgmSnazzyInfoWindowModule } from '@agm/snazzy-info-window';
import { LAZY_MAPS_API_CONFIG } from '@agm/core/services';

import { MapComponent } from './map/map.component';
import { SuburbSearchComponent } from './suburb-search/suburb-search.component';
import {SuburbsService} from '../shared/services/suburbs.service';

@Injectable()
export class GoogleMapsConfig {
  apiKey: string;
  constructor() {
    this.apiKey = ''
  }
}

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AgmCoreModule.forRoot(),
    AgmSnazzyInfoWindowModule
  ],
  declarations: [
    MapComponent,
     SuburbSearchComponent
    ],
   providers:[
    {provide: LAZY_MAPS_API_CONFIG, useClass: GoogleMapsConfig},
     SuburbsService],
  exports:
  [MapComponent, 
    SuburbSearchComponent]
})
export class MapSearchModule { }
