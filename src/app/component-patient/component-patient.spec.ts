import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentPatient } from './component-patient';

describe('ComponentPatient', () => {
  let component: ComponentPatient;
  let fixture: ComponentFixture<ComponentPatient>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponentPatient]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponentPatient);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
