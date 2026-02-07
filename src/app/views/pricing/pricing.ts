import { Component } from '@angular/core';
import { HeroSimple, PricingCategory } from '@components';
import { Course, Plag } from '@contracts';

@Component({
  selector: 'app-pricing',
  imports: [HeroSimple, PricingCategory],
  templateUrl: './pricing.html',
  styleUrl: './pricing.css',
})
export class Pricing {
  protected readonly heroTag: string = 'Transparentné ceny';
  protected readonly heroHeader: string = 'Cenník služieb';
  protected readonly heroText: string =
    'Na tejto podstránke nájdete aktuálne platný cenník. Avšak nezabúdajte na náš extra bonus, že v prípade potreby ponúkame výcvik na autoličku zdarma, bez obmedzenia dohôd.';
  protected plags: Plag[] = [
    {
      summary: 'Platnosť cenníka',
      detail: 'Od 1. januára 2026',
      severity: 'warn',
    },
    {
      summary: 'Bezplatná konzultácia',
      detail: '+421 905 817 962',
      severity: 'success',
    },
  ];

  protected readonly courses: Course[] = [
    {
      type: ['B', 'B1', 'AM'],
      price: '999',
      tags: ['Základný kurz', 'Podpora počas celého kurzu'],
    },
    {
      type: ['A', 'A2', 'A1', 'AM'],
      price: '800',
      tags: ['Základný kurz', 'Podpora počas celého kurzu'],
    },
  ];
}
