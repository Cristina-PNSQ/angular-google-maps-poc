/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MapGeoJsonService } from './map-geo-json.service';

describe('MapGeoJsonService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MapGeoJsonService]
    });
  });

  it('should ...', inject([MapGeoJsonService], (service: MapGeoJsonService) => {
    expect(service).toBeTruthy();
  }));
});
