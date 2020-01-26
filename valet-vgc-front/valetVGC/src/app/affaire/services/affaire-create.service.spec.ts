import { TestBed } from '@angular/core/testing';

import { AffaireCreateService } from './affaire-create.service';

describe('AffaireCreateService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AffaireCreateService = TestBed.get(AffaireCreateService);
    expect(service).toBeTruthy();
  });
});
