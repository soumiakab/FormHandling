import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RfEx5Component } from './rf-ex5.component';

describe('RfEx5Component', () => {
  let component: RfEx5Component;
  let fixture: ComponentFixture<RfEx5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RfEx5Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RfEx5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
