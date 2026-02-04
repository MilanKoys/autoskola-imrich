import { Component } from '@angular/core';
import { Advantages, ContactUs, Hero, Instructors, Why } from '@components';

@Component({
  selector: 'app-home',
  imports: [Hero, Advantages, Why, Instructors, ContactUs],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
