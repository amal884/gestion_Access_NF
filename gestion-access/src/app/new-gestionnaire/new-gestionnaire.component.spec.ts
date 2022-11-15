import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewGestionnaireComponent } from './new-gestionnaire.component';

describe('NewGestionnaireComponent', () => {
  let component: NewGestionnaireComponent;
  let fixture: ComponentFixture<NewGestionnaireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewGestionnaireComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewGestionnaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
