import { Component, input, InputSignal } from '@angular/core';
import { Undefined } from '@contracts';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-contact-us',
  imports: [CardModule],
  templateUrl: './contact-us.html',
  styleUrl: './contact-us.css',
})
export class ContactUs {
  public readonly onlyIcon: InputSignal<Undefined<boolean>> = input();
}
