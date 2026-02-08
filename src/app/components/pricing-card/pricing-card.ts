import { Component, input, InputSignal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-pricing-card',
  imports: [CardModule, ButtonModule, RouterLink],
  templateUrl: './pricing-card.html',
  styleUrl: './pricing-card.css',
})
export class PricingCard {
  public readonly types: InputSignal<string[]> = input.required();
  public readonly price: InputSignal<string> = input.required();
  public readonly description: InputSignal<string> = input.required();
  public readonly tags: InputSignal<string[]> = input.required();
  public readonly icon: InputSignal<{ external?: boolean; icon: string }> = input.required();
}
