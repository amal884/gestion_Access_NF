import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemandeStatusComponent } from './demande-status.component';

describe('DemandeStatusComponent', () => {
  let component: DemandeStatusComponent;
  let fixture: ComponentFixture<DemandeStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemandeStatusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DemandeStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
