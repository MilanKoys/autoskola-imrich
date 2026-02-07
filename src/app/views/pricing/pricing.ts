import { Component } from '@angular/core';
import { HeroSimple, PricingCategory, Ready } from '@components';
import { Course, Plag } from '@contracts';

@Component({
  selector: 'app-pricing',
  imports: [HeroSimple, PricingCategory, Ready],
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

  protected readonly courseCategories: {
    course: Course[];
    tag: string;
    header: string;
    summary: string;
    conditionalRide: string;
  }[] = [
    {
      tag: 'Basic',
      header: 'Štvornesačné kurzy',
      summary: 'Ideálne pre študentov s viac času na prípravu',
      conditionalRide: 'Kondičná jazda, 45 minút - 30€',
      course: [
        {
          type: ['B', 'B1', 'AM'],
          price: '999',
          description:
            'Základný kurz pre osobné automobily do 3,5t. Najobľúbenejší kurz pre začiatočníkov.',
          tags: ['Základný kurz', 'Podpora počas celého kurzu'],
          icon: 'pi pi-car',
        },
        {
          type: ['A', 'A2', 'A1', 'AM'],
          price: '800',
          description:
            'Kurz pre motocykle všetkých kategórií. Od malých skútrov po výkonné motocykle.',
          tags: ['Základný kurz', 'Podpora počas celého kurzu'],
          icon: 'motorcycle',
          externalIcon: true,
        },
      ],
    },
    {
      tag: 'Deluxe',
      header: 'Dvojmesačné kurzy',
      summary: 'Rýchlejší postup pre zaneprázdnených',
      conditionalRide: 'Kondičná jazda, 45 minút - 30€',
      course: [
        {
          type: ['B', 'B1', 'AM'],
          price: '1300',
          description:
            'Základný kurz pre osobné automobily do 3,5t. Najobľúbenejší kurz pre začiatočníkov.',
          tags: [
            'Zrýchlený "Basic" kurz',
            'Garancia dĺžky kurzu 2 mesiace',
            'Online materiály v cene',
            'Flexibilný čas',
            'Prioritná podpora',
          ],
          icon: 'pi pi-car',
        },
        {
          type: ['A', 'A2', 'A1', 'AM'],
          price: '850',
          description:
            'Kurz pre motocykle všetkých kategórií. Od malých skútrov po výkonné motocykle.',
          tags: [
            'Zrýchlený "Basic" kurz',
            'Garancia dĺžky kurzu 2 mesiace',
            'Online materiály v cene',
            'Flexibilný čas',
            'Prioritná podpora',
          ],
          icon: 'motorcycle',
          externalIcon: true,
        },
      ],
    },
    {
      tag: 'Grand Deluxe',
      header: 'Mesačné kurzy',
      summary: 'Najrýchlejšia cesta k vodičskému preukazu',
      conditionalRide: 'Kondičná jazda, 45 minút - 30€',
      course: [
        {
          type: ['B', 'B1', 'AM'],
          price: '1500',
          description:
            'Základný kurz pre osobné automobily do 3,5t. Najobľúbenejší kurz pre začiatočníkov.',
          tags: [
            'Super "Deluxe" kurzy Grand',
            'Individuálny prístup',
            'Všetky materiály v cene',
            'VIP podpora a flexibilita',
            'Jazda na diaľnici',
            'Výber termínu a času jazdy',
          ],
          icon: 'pi pi-car',
        },
        {
          type: ['A', 'A2', 'A1', 'AM'],
          price: '850',
          description:
            'Kurz pre motocykle všetkých kategórií. Od malých skútrov po výkonné motocykle.',
          tags: [
            'Super "Deluxe" kurzy Grand',
            'Individuálny prístup',
            'Všetky materiály v cene',
            'VIP podpora a flexibilita',
            'Jazda na diaľnici',
            'Výber termínu a času jazdy',
          ],
          icon: 'motorcycle',
          externalIcon: true,
        },
      ],
    },
  ];
}
