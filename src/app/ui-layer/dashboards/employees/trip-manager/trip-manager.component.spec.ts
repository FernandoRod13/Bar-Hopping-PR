import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TripManagerComponent } from './trip-manager.component';

describe('TripManagerComponent', () => {
  let component: TripManagerComponent;
  let fixture: ComponentFixture<TripManagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TripManagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TripManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
