import { Component, OnInit, Output, EventEmitter} from '@angular/core';
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

  constructor(private suburbsService: SuburbsService) { 
    this.suburbs = suburbsService.getSuburbs();
    this.selectedSuburb = this.suburbs[0];
  }

  ngOnInit() {
    this.onSelected.emit(this.selectedSuburb);
  }
  
  onChange(suburb){
    this.onSelected.emit(suburb);
  }

}
