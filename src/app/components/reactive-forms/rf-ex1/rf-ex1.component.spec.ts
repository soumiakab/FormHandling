import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RfEx1Component } from './rf-ex1.component';

describe('RfEx1Component', () => {
  let component: RfEx1Component;
  let fixture: ComponentFixture<RfEx1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RfEx1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RfEx1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
