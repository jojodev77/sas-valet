import { TestBed } from '@angular/core/testing';

import { AffaireListingService } from './affaire-listing.service';

describe('AffaireListingService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AffaireListingService = TestBed.get(AffaireListingService);
    expect(service).toBeTruthy();
  });
});
