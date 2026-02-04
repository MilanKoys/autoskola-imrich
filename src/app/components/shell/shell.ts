import { Component, input, InputSignal } from '@angular/core';
import { Header, Footer } from '@components';
import { NavigationItem } from '@contracts';

@Component({
  selector: 'app-shell',
  imports: [Header, Footer],
  templateUrl: './shell.html',
  styleUrl: './shell.css',
})
export class Shell {
  public readonly navigationItems: InputSignal<NavigationItem[]> = input.required();
}
