import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeContainerComponent } from './employee-container.component';

describe('EmployeeContainerComponent', () => {
  let component: EmployeeContainerComponent;
  let fixture: ComponentFixture<EmployeeContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
