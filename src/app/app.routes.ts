import { Routes } from '@angular/router';
import { AboutUs, Contact, Documents, Home, Pricing, Register } from '@views';

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
  {
    path: 'pricing',
    component: Pricing,
  },
  {
    path: 'documents',
    component: Documents,
  },
  {
    path: 'register',
    component: Register,
  },
];
