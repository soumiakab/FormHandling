import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckValidatorsEventComponent } from './check-validators-event.component';

describe('CheckValidatorsEventComponent', () => {
  let component: CheckValidatorsEventComponent;
  let fixture: ComponentFixture<CheckValidatorsEventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckValidatorsEventComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckValidatorsEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
