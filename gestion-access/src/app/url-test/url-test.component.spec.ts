import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UrlTestComponent } from './url-test.component';

describe('UrlTestComponent', () => {
  let component: UrlTestComponent;
  let fixture: ComponentFixture<UrlTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UrlTestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UrlTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
