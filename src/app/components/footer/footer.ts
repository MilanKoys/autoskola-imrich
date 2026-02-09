import { Component, input, InputSignal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavigationItem } from '@contracts';
import { ButtonModule } from 'primeng/button';
import { DividerModule } from 'primeng/divider';

@Component({
  selector: 'app-footer',
  imports: [DividerModule, ButtonModule, RouterLink],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {
  public readonly navigationItems: InputSignal<NavigationItem[]> = input.required();
}
