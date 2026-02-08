import { Component } from '@angular/core';
import { TagModule } from 'primeng/tag';
import { InputTextModule } from 'primeng/inputtext';
import { DatePickerModule } from 'primeng/datepicker';
import { SelectModule } from 'primeng/select';
import { TextareaModule } from 'primeng/textarea';
import { CheckboxModule } from 'primeng/checkbox';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-register',
  imports: [
    TagModule,
    InputTextModule,
    DatePickerModule,
    SelectModule,
    TextareaModule,
    CheckboxModule,
    ButtonModule,
  ],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register {
  protected readonly courseTypes: { label: string; value: string }[] = [
    {
      label: 'Štvornesačné kurzy - Basic',
      value: '4',
    },
    {
      label: 'Dvojmesačné kurzy - Deluxe',
      value: '2',
    },
    {
      label: 'Mesačné kurzy - Deluxe',
      value: '1',
    },
  ];

  protected readonly courseCategory: { label: string; value: string }[] = [
    {
      label: 'B, B1, AM',
      value: 'B',
    },
    {
      label: 'A, A2, A1, AM',
      value: 'A',
    },
  ];

  protected readonly preferedTime: { label: string; value: string }[] = [
    {
      label: 'Ráno (8:00 - 12:00)',
      value: '1',
    },
    {
      label: 'Popoludnie (12:00 - 16:00)',
      value: '2',
    },
    {
      label: 'Večer (16:00 - 20:00)',
      value: '3',
    },
    {
      label: 'Flexibilný čas',
      value: '4',
    },
  ];
}
