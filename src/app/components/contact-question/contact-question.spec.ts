import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactQuestion } from './contact-question';

describe('ContactQuestion', () => {
  let component: ContactQuestion;
  let fixture: ComponentFixture<ContactQuestion>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactQuestion]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactQuestion);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
