import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RfEx3Component } from './rf-ex3.component';

describe('RfEx3Component', () => {
  let component: RfEx3Component;
  let fixture: ComponentFixture<RfEx3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RfEx3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RfEx3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
