import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentNurse } from './component-nurse';

describe('ComponentNurse', () => {
  let component: ComponentNurse;
  let fixture: ComponentFixture<ComponentNurse>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponentNurse]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponentNurse);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
