import { Component, input, InputSignal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AccomplishmentTag, HeroAction, Plag, Severity, Undefined } from '@contracts';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';

@Component({
  selector: 'app-hero-simple',
  imports: [ButtonModule, TagModule, RouterLink],
  templateUrl: './hero-simple.html',
  styleUrl: './hero-simple.css',
})
export class HeroSimple {
  public readonly tag: InputSignal<Undefined<string>> = input();
  public readonly tagIcon: InputSignal<Undefined<string>> = input();
  public readonly tagSeverity: InputSignal<Undefined<Severity>> = input();
  public readonly tagPill: InputSignal<Undefined<boolean>> = input();
  public readonly plags: InputSignal<Undefined<Plag[]>> = input();
  public readonly header: InputSignal<string> = input.required();
  public readonly text: InputSignal<string> = input.required();
  public readonly buttons: InputSignal<Undefined<HeroAction[]>> = input();
  public readonly background: InputSignal<Undefined<boolean>> = input();
}
