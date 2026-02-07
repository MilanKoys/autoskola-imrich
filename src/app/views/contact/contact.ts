import { AfterViewInit, Component } from '@angular/core';
import { ContactQuestion, ContactUs, HeroSimple, Map } from '@components';

@Component({
  selector: 'app-contact',
  imports: [HeroSimple, ContactUs, Map, ContactQuestion],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
  protected readonly heroTag: string = 'Kontakt';
  protected readonly heroHeader: string = 'Spojte sa s nami';
  protected readonly heroText: string =
    'Máte otázky o našich kurzoch? Chcete sa zaregistrovať? Sme tu pre vás. Kontaktujte nás kedykoliek a radi vám pomôžeme.';
}
