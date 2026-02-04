import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroSimple } from './hero-simple';

describe('HeroSimple', () => {
  let component: HeroSimple;
  let fixture: ComponentFixture<HeroSimple>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeroSimple]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeroSimple);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
