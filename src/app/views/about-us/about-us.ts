import { Component } from '@angular/core';
import { Accomplishments, Advantages, HeroSimple, Ready, Story } from '@components';
import { HeroAction } from '@contracts';

@Component({
  selector: 'app-about-us',
  imports: [HeroSimple, Accomplishments, Advantages, Story, Ready],
  templateUrl: './about-us.html',
  styleUrl: './about-us.css',
})
export class AboutUs {
  protected readonly heroTag: string = 'O Autoškole IMRICH';
  protected readonly heroHeader: string = 'Vaša cesta k bezpečnej jazde';
  protected readonly heroText: string =
    'Už viac ako 15 rokov pomáhame študentom získať vodičský preukaz s dôverou a istotou. Naša autoškola je synonymom kvality, bezpečnosti a individuálneho prístupu.';
  protected readonly heroButtons: HeroAction[] = [
    {
      label: 'Začať kurz',
      route: '/pricing',
    },
    {
      label: 'Kontaktovať nás',
      variant: 'outlined',
      severity: 'secondary',
      route: '/contact',
    },
  ];
}
