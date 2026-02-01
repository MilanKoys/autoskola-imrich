import { Component, Signal, signal, WritableSignal } from '@angular/core';
import { AdvantageTag } from '@contracts';

const tags: AdvantageTag[] = [
  {
    header: '5000+',
    summary: 'Úspešných absolventov',
    detail: 'Za posledných 10 rokov',
    icon: 'pi-users',
  },
  {
    header: '98%',
    summary: 'Úspešnosť na prvýkrát',
    detail: 'Najvyššia na Slovensku',
    icon: 'pi-graduation-cap',
  },
  {
    header: '25+',
    summary: 'Rokov skúseností',
    detail: 'V oblasti vzdelávania',
    icon: 'pi-car',
  },
  {
    header: '4',
    summary: 'Profesionálni inštruktori',
    detail: 'Certifikovaní odborníci',
    icon: 'pi-trophy',
  },
];

@Component({
  selector: 'app-advantages',
  imports: [],
  templateUrl: './advantages.html',
  styleUrl: './advantages.css',
})
export class Advantages {
  private readonly _tags: WritableSignal<AdvantageTag[]> = signal(tags);

  protected readonly tags: Signal<AdvantageTag[]> = this._tags.asReadonly();
}
