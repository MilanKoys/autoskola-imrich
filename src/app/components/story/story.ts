import { Component, Signal, signal, WritableSignal } from '@angular/core';
import { TagModule } from 'primeng/tag';

const tags: string[] = ['Moderné vozidlá', 'Flexibilné hodiny'];

@Component({
  selector: 'app-story',
  imports: [TagModule],
  templateUrl: './story.html',
  styleUrl: './story.css',
})
export class Story {
  private readonly _tags: WritableSignal<string[]> = signal(tags);

  protected readonly tags: Signal<string[]> = this._tags.asReadonly();
}
