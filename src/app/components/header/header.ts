import { Component, input, InputSignal, signal, WritableSignal } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { NavigationItem } from '@contracts';
import { DrawerModule } from 'primeng/drawer';
import { DividerModule } from 'primeng/divider';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [ButtonModule, DrawerModule, DividerModule, RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  private readonly _drawerMenu: WritableSignal<boolean> = signal(false);
  public readonly navigationItems: InputSignal<NavigationItem[]> = input.required();

  protected get drawerMenu(): boolean {
    return this._drawerMenu();
  }

  protected set drawerMenu(visible: boolean) {
    this._drawerMenu.set(visible);
  }
}
