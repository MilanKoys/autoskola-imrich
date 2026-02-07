import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PricingCategory } from './pricing-category';

describe('PricingCategory', () => {
  let component: PricingCategory;
  let fixture: ComponentFixture<PricingCategory>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PricingCategory]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PricingCategory);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
