import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SuburbsService} from './services/suburbs.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers:[SuburbsService]
})
export class SharedModule { }
