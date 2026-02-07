import { Component, input, InputSignal } from '@angular/core';
import { PricingCard } from '@components';
import { Course } from '@contracts';
import { TagModule } from 'primeng/tag';

@Component({
  selector: 'app-pricing-category',
  imports: [PricingCard, TagModule],
  templateUrl: './pricing-category.html',
  styleUrl: './pricing-category.css',
})
export class PricingCategory {
  public readonly courses: InputSignal<Course[]> = input.required();
  public readonly header: InputSignal<string> = input.required();
  public readonly tag: InputSignal<string> = input.required();
  public readonly summary: InputSignal<string> = input.required();
}
