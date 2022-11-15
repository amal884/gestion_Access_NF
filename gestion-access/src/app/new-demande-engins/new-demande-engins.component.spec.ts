import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewDemandeEnginsComponent } from './new-demande-engins.component';

describe('NewDemandeEnginsComponent', () => {
  let component: NewDemandeEnginsComponent;
  let fixture: ComponentFixture<NewDemandeEnginsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewDemandeEnginsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewDemandeEnginsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
