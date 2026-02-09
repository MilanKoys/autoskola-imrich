import { Component, signal, Signal, WritableSignal } from '@angular/core';
import { AdvantageTag } from '@contracts';
import { CardModule } from 'primeng/card';

const tags: AdvantageTag[] = [
  {
    summary: 'Bezpečnosť na prvom mieste',
    detail:
      'Všetky naše vozidlá sú pravidelne kontrolované a vybavené najnovšími bezpečnostnými systémami.',
    icon: 'pi-shield',
  },
  {
    summary: 'Flexibilné hodiny',
    detail: 'Prispôsobíme sa vášmu rozvrhu. Hodiny môžete absolvovať aj večer alebo cez víkend.',
    icon: 'pi-clock',
  },
  {
    summary: 'Skúsení inštruktori',
    detail: 'Naši inštruktori majú viac ako 10+ rokov praxe a stovky spokojných absolventov.',
    icon: 'pi-users',
  },
  {
    summary: 'Vysoká úspešnosť',
    detail: 'Vysoké percento našich študentov prospeje na prvý pokus. To je záruka kvality.',
    icon: 'pi-trophy',
  },
  {
    summary: 'Moderné vozidlá',
    detail: 'Učíte sa na najnovších modeloch áut s manuálnou prevodovkou.',
    icon: 'pi-car',
  },
  {
    summary: '24/7 podpora',
    detail: 'Sme tu pre vás kedykoliek potrebujete pomoc alebo máte otázky ohľadom kurzu.',
    icon: 'pi-headphones',
  },
];

@Component({
  selector: 'app-advantages',
  imports: [CardModule],
  templateUrl: './advantages.html',
  styleUrl: './advantages.css',
})
export class Advantages {
  private readonly _tags: WritableSignal<AdvantageTag[]> = signal(tags);

  protected readonly tags: Signal<AdvantageTag[]> = this._tags.asReadonly();
}
