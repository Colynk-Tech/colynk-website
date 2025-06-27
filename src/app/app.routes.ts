import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Contact } from './pages/contact/contact';
import { OverOns } from './pages/over-ons/over-ons';
import { Experience } from './pages/experience/experience';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'contact', component: Contact },
  { path: 'over-ons', component: OverOns },
  { path: 'ervaring', component: Experience }
];
