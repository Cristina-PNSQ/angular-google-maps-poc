/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SuburbsService } from './suburbs.service';

describe('SuburbsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SuburbsService]
    });
  });

  it('should ...', inject([SuburbsService], (service: SuburbsService) => {
    expect(service).toBeTruthy();
  }));
});
