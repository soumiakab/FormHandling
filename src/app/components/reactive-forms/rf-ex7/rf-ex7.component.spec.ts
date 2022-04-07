import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RfEx7Component } from './rf-ex7.component';

describe('RfEx7Component', () => {
  let component: RfEx7Component;
  let fixture: ComponentFixture<RfEx7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RfEx7Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RfEx7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
