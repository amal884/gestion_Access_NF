import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewDemandePersonneComponent } from './new-demande-personne.component';

describe('NewDemandePersonneComponent', () => {
  let component: NewDemandePersonneComponent;
  let fixture: ComponentFixture<NewDemandePersonneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewDemandePersonneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewDemandePersonneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
