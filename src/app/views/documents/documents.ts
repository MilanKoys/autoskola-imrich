import { Component } from '@angular/core';
import { Document, HeroSimple } from '@components';

@Component({
  selector: 'app-documents',
  imports: [HeroSimple, Document],
  templateUrl: './documents.html',
  styleUrl: './documents.css',
})
export class Documents {}
