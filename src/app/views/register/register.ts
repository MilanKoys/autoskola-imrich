import { Component, inject } from '@angular/core';
import { TagModule } from 'primeng/tag';
import { InputTextModule } from 'primeng/inputtext';
import { DatePickerModule } from 'primeng/datepicker';
import { SelectModule } from 'primeng/select';
import { TextareaModule } from 'primeng/textarea';
import { CheckboxModule } from 'primeng/checkbox';
import { ButtonModule } from 'primeng/button';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Nullable } from '@contracts';
import { HttpClient } from '@angular/common/http';

interface RegisterForm {
  firstName: FormControl<Nullable<string>>;
  lastName: FormControl<Nullable<string>>;
  email: FormControl<Nullable<string>>;
  phone: FormControl<Nullable<string>>;
  address: FormControl<Nullable<string>>;
  birthday: FormControl<Nullable<Date>>;
  courseType: FormControl<Nullable<string>>;
  courseCategory: FormControl<Nullable<string>>;
  courseStart: FormControl<Nullable<Date>>;
  preferedTime: FormControl<Nullable<string>>;
  remarks: FormControl<Nullable<string>>;
  agreement: FormControl<Nullable<boolean>>;
  tos: FormControl<Nullable<boolean>>;
}

interface RegisterFormValues {
  firstName: Nullable<string>;
  lastName: Nullable<string>;
  email: Nullable<string>;
  phone: Nullable<string>;
  address: Nullable<string>;
  birthday: Nullable<Date>;
  courseType: Nullable<string>;
  courseCategory: Nullable<string>;
  courseStart: Nullable<Date>;
  preferedTime: Nullable<string>;
  remarks: Nullable<string>;
  agreement: Nullable<boolean>;
  tos: Nullable<boolean>;
}

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
    ReactiveFormsModule,
  ],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register {
  private readonly _httpClient: HttpClient = inject(HttpClient);
  private readonly _formBuilder: FormBuilder = inject(FormBuilder);
  private readonly _form: FormGroup<RegisterForm> = this._formBuilder.group({
    firstName: this._formBuilder.control<Nullable<string>>(null, [Validators.required]),
    lastName: this._formBuilder.control<Nullable<string>>(null, [Validators.required]),
    email: this._formBuilder.control<Nullable<string>>(null, [Validators.required]),
    phone: this._formBuilder.control<Nullable<string>>(null, [Validators.required]),
    address: this._formBuilder.control<Nullable<string>>(null, [Validators.required]),
    birthday: this._formBuilder.control<Nullable<Date>>(null, [Validators.required]),
    courseType: this._formBuilder.control<Nullable<string>>(null, [Validators.required]),
    courseCategory: this._formBuilder.control<Nullable<string>>(null, [Validators.required]),
    courseStart: this._formBuilder.control<Nullable<Date>>(null),
    preferedTime: this._formBuilder.control<Nullable<string>>(null),
    remarks: this._formBuilder.control<Nullable<string>>(null),
    agreement: this._formBuilder.control<Nullable<boolean>>(null, [Validators.required]),
    tos: this._formBuilder.control<Nullable<boolean>>(null, [Validators.required]),
  });

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

  protected register() {
    if (this._form.invalid) return;
    const values: RegisterFormValues = this._form.getRawValue();

    this._httpClient.post('http://autoskolaimrich.sk/api/register', values).subscribe({
      complete: () => console.log('Register complete!'),
      error: () => console.log('Register error!'),
    });
  }

  protected get form() {
    return this._form;
  }
}
