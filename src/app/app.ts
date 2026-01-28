import { Component } from '@angular/core';
import { Header } from './components';
import { NavigationItem } from '@contracts';

@Component({
  selector: 'app-root',
  imports: [Header],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly navigationItems: NavigationItem[] = [
    {
      label: 'Domov',
      route: 'home',
    },
    {
      label: 'Galéria',
      route: 'gallery',
    },
    {
      label: 'Dokumenty',
      route: 'documents',
    },
    {
      label: 'Cenník',
      route: 'price',
    },
    {
      label: 'O Nás',
      route: 'about',
    },
    {
      label: 'Kontakt',
      route: 'contact',
    },
  ];
}
