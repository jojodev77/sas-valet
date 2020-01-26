import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AffaireCreateComponent } from './affaire-create.component';

describe('AffaireCreateComponent', () => {
  let component: AffaireCreateComponent;
  let fixture: ComponentFixture<AffaireCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AffaireCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AffaireCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
