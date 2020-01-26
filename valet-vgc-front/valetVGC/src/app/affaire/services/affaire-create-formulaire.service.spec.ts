import { TestBed } from '@angular/core/testing';

import { AffaireCreateFormulaireService } from './affaire-create-formulaire.service';

describe('AffaireCreateFormulaireService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AffaireCreateFormulaireService = TestBed.get(AffaireCreateFormulaireService);
    expect(service).toBeTruthy();
  });
});
