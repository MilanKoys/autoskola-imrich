import { Component } from '@angular/core';
import { Accomplishments, Advantages, HeroAbout, Ready, Story } from '@components';

@Component({
  selector: 'app-about-us',
  imports: [HeroAbout, Accomplishments, Advantages, Story, Ready],
  templateUrl: './about-us.html',
  styleUrl: './about-us.css',
})
export class AboutUs {}
