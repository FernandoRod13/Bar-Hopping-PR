import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPartnerFormComponent } from './add-partner-form.component';

describe('AddPartnerFormComponent', () => {
  let component: AddPartnerFormComponent;
  let fixture: ComponentFixture<AddPartnerFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddPartnerFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPartnerFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
