import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogInEmployeeComponent } from './log-in-employee.component';

describe('LogInEmployeeComponent', () => {
  let component: LogInEmployeeComponent;
  let fixture: ComponentFixture<LogInEmployeeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogInEmployeeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogInEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
