import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-register-success',
  imports: [ButtonModule, RouterLink],
  templateUrl: './register-success.html',
  styleUrl: './register-success.css',
})
export class RegisterSuccess {}
