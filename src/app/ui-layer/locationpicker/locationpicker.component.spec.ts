import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationpickerComponent } from './locationpicker.component';

describe('LocationpickerComponent', () => {
  let component: LocationpickerComponent;
  let fixture: ComponentFixture<LocationpickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocationpickerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocationpickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
