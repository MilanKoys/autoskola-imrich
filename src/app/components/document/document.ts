import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-document',
  imports: [ButtonModule],
  templateUrl: './document.html',
  styleUrl: './document.css',
})
export class Document {
  protected downloadPDF() {
    const link = document.createElement('a');
    link.href = 'ziadost.pdf';
    link.download = 'ziadost.pdf';
    link.click();
  }
}
