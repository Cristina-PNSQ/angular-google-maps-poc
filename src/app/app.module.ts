import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AgmCoreModule } from '@agm/core';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBCh__N9QqVlqlYpfO6w_tKMT59G0ao964',
      clientId: 'Cristina Test'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
