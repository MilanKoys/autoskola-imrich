import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-ready',
  imports: [ButtonModule, RouterLink],
  templateUrl: './ready.html',
  styleUrl: './ready.css',
})
export class Ready {}
