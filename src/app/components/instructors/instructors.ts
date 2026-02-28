import { CommonModule } from '@angular/common';
import { Component, Signal, signal, WritableSignal } from '@angular/core';
import { Instructor } from '@contracts';
import { CardModule } from 'primeng/card';
import { TagModule } from 'primeng/tag';

const instructors: Instructor[] = [
  {
    name: 'Bc. Radoslav Urbančík',
    position: 'Inštuktor autoškoly',
    experience: '20+',
    students: '2000+',
    specialization: ['Skupina A, A2, A1, B, B1, AM'],
  },
  {
    name: 'Ing. Ladislav IMRICH',
    position: 'Súdny znalec v doprave',
    experience: '30',
    students: '2000+',
    specialization: ['Skupina A, A2, A1, B, B1, AM'],
    image: 'rado_urbancik.jpg',
  },
];

@Component({
  selector: 'app-instructors',
  imports: [CommonModule, CardModule, TagModule],
  templateUrl: './instructors.html',
  styleUrl: './instructors.css',
})
export class Instructors {
  private readonly _instructors: WritableSignal<Instructor[]> = signal(instructors);

  protected readonly instructors: Signal<Instructor[]> = this._instructors.asReadonly();
}
