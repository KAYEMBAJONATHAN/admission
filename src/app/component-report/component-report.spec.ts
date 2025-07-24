import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentReport } from './component-report';

describe('ComponentReport', () => {
  let component: ComponentReport;
  let fixture: ComponentFixture<ComponentReport>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponentReport]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponentReport);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
