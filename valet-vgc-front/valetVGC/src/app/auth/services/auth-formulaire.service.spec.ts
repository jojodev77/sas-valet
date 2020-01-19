import { TestBed } from '@angular/core/testing';

import { AuthFormulaireService } from './auth-formulaire.service';

describe('AuthFormulaireService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AuthFormulaireService = TestBed.get(AuthFormulaireService);
    expect(service).toBeTruthy();
  });
});
