import { Component, Signal, signal, WritableSignal } from '@angular/core';
import { AccomplishmentTag } from '@contracts';

const tags: AccomplishmentTag[] = [
  {
    header: '4000+',
    detail: 'Úspešných absolventov',
  },
  {
    header: '98%',
    detail: 'Úspešnosť na prvýkrát',
  },
  {
    header: '25+',
    detail: 'Rokov skúseností',
  },
  {
    header: '2',
    detail: 'Profesionálni inštruktori',
  },
];

@Component({
  selector: 'app-accomplishments',
  imports: [],
  templateUrl: './accomplishments.html',
  styleUrl: './accomplishments.css',
})
export class Accomplishments {
  private readonly _tags: WritableSignal<AccomplishmentTag[]> = signal(tags);

  protected readonly tags: Signal<AccomplishmentTag[]> = this._tags.asReadonly();
}
