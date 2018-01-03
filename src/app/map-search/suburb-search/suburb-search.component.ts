import { Component, OnInit, Output, EventEmitter, NgZone} from '@angular/core';
import { Suburb } from '../../shared/models/suburb';
import { SuburbsService } from '../../shared/services/suburbs.service';

@Component({
  selector: 'suburb-search',
  templateUrl: './suburb-search.component.html',
  styleUrls: ['./suburb-search.component.css']
})
export class SuburbSearchComponent implements OnInit {

  suburbs: Suburb[];
  selectedSuburb : Suburb;
  @Output() onSelected = new EventEmitter<Suburb>();

  constructor(private suburbsService: SuburbsService, 
    private ngZone: NgZone) { 
    this.suburbs = suburbsService.getSuburbs();
    this.selectedSuburb = this.suburbs[0];
  }

  ngOnInit() {
    //this.onSelected.emit(this.selectedSuburb);
    this.setCurrentPosition();
  }
  
  onChange(suburb){
    this.onSelected.emit(suburb);
  }

  private setCurrentPosition() {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.selectedSuburb = {name:'geolocation', 
                              state:'geolocation',
                              latitude: position.coords.latitude, 
                              longitude: position.coords.longitude,
                              postalCode:'geolocation',
                              country:'Australia',
                              isGeolocation: true}; 
      this.onSelected.emit(this.selectedSuburb);
      });
    }
  }
}
