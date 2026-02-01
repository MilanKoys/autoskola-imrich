import { Component, Signal, signal, WritableSignal } from '@angular/core';
import { Instructor } from '@contracts';
import { CardModule } from 'primeng/card';
import { TagModule } from 'primeng/tag';

const instructors: Instructor[] = [
  {
    name: 'Bc. Radoslav Urbančík',
    position: 'Zakladateľ autoškoly',
    experience: '20+',
    students: '2000+',
    specialization: ['Skupina A, B, C, T, E, D'],
    awards: ['Certifikát DEKRA', '98% úspešnosť', 'súdny znalec v doprave'],
  },
  {
    name: 'Ing. Ladislav IMRICH',
    position: 'CEO spoločnosti',
    experience: '30',
    students: '2000+',
    specialization: ['Skupina A, B, C, T, E, D'],
    awards: ['Certifikát DEKRA', 'súdny znalec v doprave'],
  },
];

@Component({
  selector: 'app-instructors',
  imports: [CardModule, TagModule],
  templateUrl: './instructors.html',
  styleUrl: './instructors.css',
})
export class Instructors {
  private readonly _instructors: WritableSignal<Instructor[]> = signal(instructors);

  protected readonly instructors: Signal<Instructor[]> = this._instructors.asReadonly();
}
