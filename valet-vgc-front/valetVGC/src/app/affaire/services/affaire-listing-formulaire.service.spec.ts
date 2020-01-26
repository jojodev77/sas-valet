import { TestBed } from '@angular/core/testing';

import { AffaireListingFormulaireService } from './affaire-listing-formulaire.service';

describe('AffaireListingFormulaireService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AffaireListingFormulaireService = TestBed.get(AffaireListingFormulaireService);
    expect(service).toBeTruthy();
  });
});
