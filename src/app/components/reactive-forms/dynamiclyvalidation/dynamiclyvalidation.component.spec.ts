import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamiclyvalidationComponent } from './dynamiclyvalidation.component';

describe('DynamiclyvalidationComponent', () => {
  let component: DynamiclyvalidationComponent;
  let fixture: ComponentFixture<DynamiclyvalidationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DynamiclyvalidationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamiclyvalidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
