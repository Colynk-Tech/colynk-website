import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OverOns } from './over-ons';

describe('OverOns', () => {
  let component: OverOns;
  let fixture: ComponentFixture<OverOns>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OverOns],
    }).compileComponents();

    fixture = TestBed.createComponent(OverOns);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
