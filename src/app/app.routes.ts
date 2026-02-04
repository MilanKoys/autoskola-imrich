import { Routes } from '@angular/router';
import { AboutUs, Contact, Home } from '@views';

export const routes: Routes = [
  {
    path: '',
    component: Home,
  },
  {
    path: 'about-us',
    component: AboutUs,
  },
  {
    path: 'contact',
    component: Contact,
  },
];
