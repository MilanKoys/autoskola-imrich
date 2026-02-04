import { Routes } from '@angular/router';
import { AboutUs, Home } from '@views';

export const routes: Routes = [
  {
    path: '',
    component: Home,
  },
  {
    path: 'about-us',
    component: AboutUs,
  },
];
