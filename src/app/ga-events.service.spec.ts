import { TestBed, inject } from '@angular/core/testing';

import { GaEventsService } from './ga-events.service';

describe('GaEventsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GaEventsService]
    });
  });

  it('should be created', inject([GaEventsService], (service: GaEventsService) => {
    expect(service).toBeTruthy();
  }));
});
