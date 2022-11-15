import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewDemandeTransitaireComponent } from './new-demande-transitaire.component';

describe('NewDemandeTransitaireComponent', () => {
  let component: NewDemandeTransitaireComponent;
  let fixture: ComponentFixture<NewDemandeTransitaireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewDemandeTransitaireComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewDemandeTransitaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
