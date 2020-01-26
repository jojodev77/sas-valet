import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AffaireListingComponent } from './affaire-listing.component';

describe('AffaireListingComponent', () => {
  let component: AffaireListingComponent;
  let fixture: ComponentFixture<AffaireListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AffaireListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AffaireListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
