import { Component, inject, Signal, signal, WritableSignal } from '@angular/core';
import { FormBuilder, FormControl, ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { RatingModule } from 'primeng/rating';

const tags: string[] = ['98% úspešnosť', 'Moderné vozidlá', 'Flexibilné hodiny'];

@Component({
  selector: 'app-hero',
  imports: [RatingModule, ReactiveFormsModule, ButtonModule, RouterLink],
  templateUrl: './hero.html',
  styleUrl: './hero.css',
})
export class Hero {
  private readonly _formBuilder: FormBuilder = inject(FormBuilder);
  private readonly _tags: WritableSignal<string[]> = signal(tags);

  protected readonly tags: Signal<string[]> = this._tags.asReadonly();
  protected readonly ratingControl: FormControl<number> = this._formBuilder.control<number>(4, {
    nonNullable: true,
  });
}
