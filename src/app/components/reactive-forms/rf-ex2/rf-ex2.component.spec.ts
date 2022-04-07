import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RfEx2Component } from './rf-ex2.component';

describe('RfEx2Component', () => {
  let component: RfEx2Component;
  let fixture: ComponentFixture<RfEx2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RfEx2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RfEx2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
