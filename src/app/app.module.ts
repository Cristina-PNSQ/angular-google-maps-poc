import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
//import { AgmSnazzyInfoWindowModule } from '@agm/snazzy-info-window';
import {MapSearchModule} from './map-search/map-search.module';
import {SharedModule} from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    SharedModule,
    MapSearchModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
