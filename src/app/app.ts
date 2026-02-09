import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Shell } from '@components';
import { NavigationItem } from '@contracts';
import { ToastModule } from 'primeng/toast';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Shell, ToastModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly navigationItems: NavigationItem[] = [
    {
      label: 'Domov',
      route: '',
    },
    /*     {
      label: 'Galéria',
      route: 'gallery',
    }, */
    {
      label: 'Dokumenty',
      route: 'documents',
    },
    {
      label: 'Cenník',
      route: 'pricing',
    },
    {
      label: 'O Nás',
      route: 'about-us',
    },
    {
      label: 'Kontakt',
      route: 'contact',
    },
  ];
}
