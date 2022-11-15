import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewDemandeurComponent } from './new-demandeur.component';

describe('NewDemandeurComponent', () => {
  let component: NewDemandeurComponent;
  let fixture: ComponentFixture<NewDemandeurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewDemandeurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewDemandeurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
