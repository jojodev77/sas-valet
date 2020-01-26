import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AffaireContainerComponent } from './affaire-container.component';

describe('AffaireContainerComponent', () => {
  let component: AffaireContainerComponent;
  let fixture: ComponentFixture<AffaireContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AffaireContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AffaireContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
