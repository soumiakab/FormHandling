import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RfEx6Component } from './rf-ex6.component';

describe('RfEx6Component', () => {
  let component: RfEx6Component;
  let fixture: ComponentFixture<RfEx6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RfEx6Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RfEx6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
