import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RfEx4Component } from './rf-ex4.component';

describe('RfEx4Component', () => {
  let component: RfEx4Component;
  let fixture: ComponentFixture<RfEx4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RfEx4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RfEx4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
