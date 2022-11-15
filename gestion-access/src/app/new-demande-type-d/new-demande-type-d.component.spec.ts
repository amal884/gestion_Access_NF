import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewDemandeTypeDComponent } from './new-demande-type-d.component';

describe('NewDemandeTypeDComponent', () => {
  let component: NewDemandeTypeDComponent;
  let fixture: ComponentFixture<NewDemandeTypeDComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewDemandeTypeDComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewDemandeTypeDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
