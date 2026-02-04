import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';

@Component({
  selector: 'app-hero-about',
  imports: [ButtonModule, TagModule],
  templateUrl: './hero-about.html',
  styleUrl: './hero-about.css',
})
export class HeroAbout {}
